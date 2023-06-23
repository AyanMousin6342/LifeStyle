using Lifestyle.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class inventoryController : ControllerBase
    {
        private readonly MyDatabaseContext con;
        public inventoryController(MyDatabaseContext context)
        {
            con = context;


        }
        // GET: api/<ValuesController>
        [HttpGet]
        public IActionResult Get()
        {
            var inv = con.Inventories.ToList();
            return Ok(inv);
        }

        [HttpGet("GetInventoriesByCategoryId/{categoryId}")]
        public ActionResult<List<inventory>>getInventoriesByCategoryId(int categoryId)
        {
            var inv = con.Inventories.Where(i => i.category_id == categoryId).ToList();
            return inv;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{Id}")]
        public IActionResult GetById(int Id)
        {
            var inv = con.Inventories.Find(Id);
            if (inv == null)
                return NotFound();
            return Ok(inv);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult Create(inventory inv)
        {
            con.Inventories.Add(inv);
            con.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { Id = inv.Inventory_id }, inv);
        }



        // PUT api/<ValuesController>/5
        [HttpPut("{Id}")]
        public IActionResult Put(int Id, inventory details)
        {
            var existinginventory = con.Inventories.Find(Id);

            if (existinginventory == null)
            {
                return NotFound();
            }
            existinginventory.category_id = details.category_id;
            existinginventory.category_name = details.category_name;
            existinginventory.inventory_name = details.inventory_name;
            existinginventory.price = details.price;
            existinginventory.quantity = details.quantity;
            existinginventory.seller = details.seller;
            existinginventory.description = details.description;
            existinginventory.sold_items = details.sold_items;
            existinginventory.sold_date = details.sold_date;
            con.SaveChanges();

            return Ok(existinginventory);
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            var obj = con.Inventories.FirstOrDefault(I=>I.Inventory_id==Id);
            if (obj == null)
            return NotFound();
            con.Inventories.Remove(obj);
            con.SaveChanges();
            return Ok();
        }
    }
}
