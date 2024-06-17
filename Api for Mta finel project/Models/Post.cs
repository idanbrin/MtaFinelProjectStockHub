using System.ComponentModel.DataAnnotations;

namespace Api_for_Mta_finel_project.Models
{
    public class Post : Comment
    {
        public int id { get; set; }
        [Required]
        [StringLength(50)]
        public string? title { get; set; } = null!;
        
    }
   
}
