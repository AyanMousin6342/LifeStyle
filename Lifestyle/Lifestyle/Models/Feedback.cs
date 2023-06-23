using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace Lifestyle.Models
{
    [Table("Feedback")]
    public class Feedback
    {
        [Key]
        public int Id { get; set; }



        [Required]
        public string Email { get; set; }



        [Required]
        public string feedback { get; set; }
    }
}