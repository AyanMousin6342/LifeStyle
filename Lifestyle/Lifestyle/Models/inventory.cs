using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Lifestyle.Models
{
    public class inventory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Inventory_id { get; set; }

        [Required]
        public int category_id { get; set; }

        [Required]
        [MaxLength(255)]
        public string? inventory_name { get; set; }

        [MaxLength(255)]
        public string? category_name { get; set; }

        [Required]
        public decimal price { get; set; }

        [Required]
        public int quantity { get; set; }

        [Required]
        [MaxLength(255)]
        public string? seller { get; set; }

        public string? description { get; set; }

        public int? sold_items { get; set; }

        public DateTime sold_date { get; set; }

       
      
    }
}

