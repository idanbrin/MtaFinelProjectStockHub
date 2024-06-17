using System.ComponentModel.DataAnnotations;

namespace Api_for_Mta_finel_project.Models
{
    public class Like
    {

        public int id { get; set; }
        public  string? userName;
        [Required]
        public DateTime? date;

    }
}
