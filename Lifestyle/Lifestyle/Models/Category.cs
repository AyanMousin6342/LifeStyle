using System.ComponentModel.DataAnnotations;

namespace Lifestyle.Models
{
    public class Category
    {
        [Key]
        public int category_id { get; set; }

        [Required]
        [StringLength(255)]
        public string? category_name { get; set; }

        [StringLength(255)]
        public string? category_image { get; set; }
    }
}
