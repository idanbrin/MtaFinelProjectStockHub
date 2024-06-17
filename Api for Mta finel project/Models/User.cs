using Api_for_Mta_finel_project.Data;
using Microsoft.EntityFrameworkCore.Storage;
using System.ComponentModel.DataAnnotations;

namespace Api_for_Mta_finel_project.Models
{
    public class User
    {


        public int Id { get; set; }
        [Required]
        public string userName { get; set; } = null!;
        [Required]
        public string password { get; set; } = null!;
        [Required]
        public string email { get; set; } = null!;

        public Like[]? Likes { get; set; } = null!;

        public int[] friendsId { get; set; } = null!;
        public int[] postId { get; set; } = null!;//here all his id's posts
        public int[] otherPostsId { get; set; } = null!;//the posts that will be shown in the user's fid    
        public string permissionType { get; set; } = null!;
        //add token
    }

    public class LoginModel
    {
        public string username { get; set; }
        public string password { get; set; }
    }
}

