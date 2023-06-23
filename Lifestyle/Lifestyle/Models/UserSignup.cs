using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace Lifestyle.Models
{
    [Table("Users")]
    public class UserSignup
    {



        [Key]
        public int user_id { get; set; }



        [Required]
        public string? firstname { get; set; }



        [Required]
        public string? lastname { get; set; }



        [Required]



        public string? email { get; set; }



        [Required]
        public string? password { get; set; }






    }
}

