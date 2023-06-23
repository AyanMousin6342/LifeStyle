using System.ComponentModel.DataAnnotations;



namespace Lifestyle.Models
{
    public class Getstoreprocedure
    {
        public string? month_year { get; set; }
        public int category_id { get; set; }
        public string? category_name { get; set; }



        [Key]
        public int inventory_id { get; set; }
        public string? inventory_name { get; set; }
        public decimal price { get; set; }
        public int quantity { get; set; }
        public string? seller { get; set; }
        public string? description { get; set; }
        public int sold_items { get; set; }
        public int remaining_quantity { get; set; }
    }
}