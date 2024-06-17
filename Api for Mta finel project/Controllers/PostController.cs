using Api_for_Mta_finel_project.Models;
using Api_for_Mta_finel_project.Repository;
using Microsoft.AspNetCore.Mvc;
using NuGet.Packaging;

namespace Api_for_Mta_finel_project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : Controller
    {
        private readonly PostRepository _postRepository;
        public PostController(PostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("{postId}")]
        public async Task<ActionResult> AddLike(int postId, [FromBody] Like like)
        {
            try
            {
                Post post = _postRepository.returnPostById(postId);
                Like foundLike = post.likes.Find(p => p.userName == like.userName);
                if(foundLike != null)
                {
                    return BadRequest("this username already ");
                }
                post.likes.Add(like);
                return Ok("The like  added successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        public async Task<ActionResult> deletePost(int postId, [FromBody] Like like)
        {
            try
            {
              _postRepository.deletePostById(postId);
               return Ok("The like  added successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("{postId}")]
        public async Task<ActionResult> addComment(int postId, [FromBody] Comment comment)
        {
            try
            {
                _postRepository.addCommentToPost(postId, comment);
                return Ok("The like  added successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }


}
