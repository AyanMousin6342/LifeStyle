using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace Lifestyle.Models
{
    [Table("AdminLogin")]
    public class AdminLogin
    {
        [Key]
        public int AdminID { get; set; }

        [Required]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}