using Api_for_Mta_finel_project.Data;
using Api_for_Mta_finel_project.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_for_Mta_finel_project.Repository
{
    public class PostRepository
    {
        private readonly AppDbContext _dbContext;

        public PostRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public int addPost(Post newPost)//throws exception
        {


           
            _dbContext.Posts.Add(newPost);
            _dbContext.SaveChanges();
            return newPost.id;

        }
        public Post returnPostById(int id)
        {
            Post? post = _dbContext.Posts.FirstOrDefault(u => u.id == id);
            if (post == null)
            {
                throw new Exception("there is no post with the id: " + id);
            }
            return post;
        }

        public void deletePostById(int id) 
        {
            Post? post = _dbContext.Posts.FirstOrDefault(u => u.id == id);
            if (post == null)
            {
                throw new Exception("there is no post with the id: " + id);
            }
            _dbContext.Posts.Remove(post);
            _dbContext.SaveChanges();
        }

        public void addCommentToPost(int postId,Comment comment)
        {

            Post? post = _dbContext.Posts.FirstOrDefault(u => u.id == postId);
            if (post == null)
            {
                throw new Exception("there is no post with the id: " + postId);
            }
            post.comments.Add(comment);
            _dbContext.SaveChanges();
        }
    }
}
