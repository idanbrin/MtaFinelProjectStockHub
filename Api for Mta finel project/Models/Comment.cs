using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Api_for_Mta_finel_project.Models
{
    public class Comment
    {
        [Required]
        public int id;
        public string userName { get; set; }
        [Required]
        [StringLength(100)]
        public string content { get; set; }
        [Required]
        public DateTime createdAt { get; set; }
        public List<Like>? likes { get; set; } = null!;

        public List<Comment>? comments { get; set; } = null!;
        public int? views { get; set; } = null!;
        public byte[]? ImageData { get; set; } = null!; // Byte array to store image data

    }
}
