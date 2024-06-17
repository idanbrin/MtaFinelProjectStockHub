        using Api_for_Mta_finel_project.Data;
        using Api_for_Mta_finel_project.Models;
        using Api_for_Mta_finel_project.Repository;
        using Microsoft.AspNetCore.Mvc;
        using Newtonsoft.Json.Linq;
        using System.Diagnostics.CodeAnalysis;
        using System.Text.Json;
        using BCrypt.Net;
using NuGet.Packaging;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api_for_Mta_finel_project.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly UserRepository _userRepository;
        private readonly PostRepository _postRepository;

        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("{userName}")]
        public async Task<ActionResult> GetUserById(string userName)
        {
            try
            {
                User user = await Task.Run(() => _userRepository.returnUserByUserName(userName));

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{userName}")]
        public async Task<ActionResult> GetUserByIdAndPassword([FromBody] LoginModel loginModel)//register
        {
            try
            {
                // Retrieve the user from the repository based on the username
                var user = await Task.Run(() => _userRepository.returnUserByUserName(loginModel.username));

                if (user == null)
                {
                    return Unauthorized("Invalid username or password.");
                }

                // Verify the provided password against the hashed password
                bool isPasswordValid = BCrypt.Net.BCrypt.Verify(loginModel.password, user.password);

                if (!isPasswordValid)
                {
                    return Unauthorized("Invalid username or password.");
                }

                // The user is authenticated
                // TODO: Implement logic for generating and returning a token or session
                return Ok("Login successful.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        public async Task<ActionResult> PostUser([FromBody] User newUser)//register
        {
            try
            {
                newUser.password = BCrypt.Net.BCrypt.HashPassword(newUser.password);
                await Task.Run(() => _userRepository.addUser(newUser));
                return Ok("The user added successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{userName}")]
        public async Task<ActionResult> UpdateUser(string userName)
        {
            try
            {
                User user = await Task.Run(() => _userRepository.returnUserByUserName(userName));
                // Need to create a new function instead of returning here
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{userName}")]
        public async Task<ActionResult> DeleteUser(string userName)
        {
            try
            {
                User user = await Task.Run(() => _userRepository.returnUserByUserName(userName));

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{userName},{friendId}")]
        public async Task<ActionResult> AddFriend(string userName, int friendId)
        {
            try
            {
                User user = await Task.Run(() => _userRepository.returnUserByUserName(userName));
                User userFriend = await Task.Run(() => _userRepository.returnUserByUserName(userName));
                user.friendsId.Append<int>(friendId);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{userName}")]
        public async Task<ActionResult> AddPost(string userName, Post post)
        {
            try
            {
                _postRepository.addPost(post); 
                User user = await Task.Run(() => _userRepository.returnUserByUserName(userName));
                user.postId.Append<int>(post.id);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{userName}")]
        public async Task<ActionResult> UpdateUser(string userName, [FromBody] User updatedUser)
        {
            try
            {
                User user = await Task.Run(() => _userRepository.returnUserByUserName(userName));
                // Need to create a new function instead of returning here
                if (!string.IsNullOrEmpty(updatedUser.userName))
                {
                    user.userName = updatedUser.userName;
                }

                if (!string.IsNullOrEmpty(updatedUser.password))
                {
                    user.password = updatedUser.password;
                }

                if (!string.IsNullOrEmpty(updatedUser.email))
                {
                    user.email = updatedUser.email;
                }

                if (updatedUser.Likes != null)
                {
                    user.Likes = updatedUser.Likes;
                }

                if (updatedUser.postId != null && updatedUser.postId.Length > 0)
                {
                    
                    user.postId = updatedUser.postId;
                }

                if (!string.IsNullOrEmpty(updatedUser.permissionType))
                {
                    user.permissionType = updatedUser.permissionType;
                }
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }

}
