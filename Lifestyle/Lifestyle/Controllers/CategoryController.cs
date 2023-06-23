using Lifestyle.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;

namespace Lifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly MyDatabaseContext con;

        public CategoryController(MyDatabaseContext context)
        {
            con = context;
        }

        // GET: api/Category
        [HttpGet]
        public IActionResult Get()
        {
            var categories = con.categories;

            if (categories != null)
            {
                var categoryList = categories.ToList();
                return Ok(categoryList);
            }

            return NotFound();
        }

        // GET: api/Category/{name}
        [HttpGet("{name}", Name = "GetCategoryByName")]
        public IActionResult GetByName(string name)
        {
            var category = con.categories.FirstOrDefault(c => c.category_name.ToLower() == name.ToLower());

            if (category != null)
            {
                return Ok(category);
            }
            else
            {
                return NotFound();
            }
        }

        // GET: api/Category/id/{Id}
        [HttpGet("id/{Id}", Name = "GetCategoryById")]
        public IActionResult GetById(int Id)
        {
            var category = con.categories.Find(Id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // POST: api/Category/upload
        [HttpPost("upload")]
        public IActionResult Create()
        {
            var file = Request.Form.Files[0];

            if (file != null && file.Length > 0)
            {
                string fileExtension = Path.GetExtension(file.FileName);
                string newFileName = GetUniqueFileName(fileExtension);
                string filePath = Path.Combine("C:\\Users\\mohsin\\Documents\\Lifestyle\\ls_app\\src\\assets\\Category_images", newFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                    file.CopyTo(stream);

                string name = Request.Form["name"];

                var obj = new Category
                {
                    category_name = name,
                    category_image = newFileName
                };

                con.categories.Add(obj);
                con.SaveChanges();

                return Ok();
            }
            else
            {
                return BadRequest("No file was uploaded.");
            }
        }

        // PUT: api/Category/{Id}
        [HttpPut("{Id}")]
        public IActionResult Put(int Id, Category category)
        {
            var existingCategory = con.categories.Find(Id);

            if (existingCategory == null)
            {
                return NotFound();
            }

            existingCategory.category_name = category.category_name;
            existingCategory.category_image = category.category_image;
            con.SaveChanges();

            return Ok(existingCategory);
        }

        // DELETE: api/Category/{Id}
        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            var category = con.categories.Find(Id);

            if (category == null)
            {
                return NotFound();
            }

            con.categories.Remove(category);
            con.SaveChanges();

            return NoContent();
        }

        private string GetUniqueFileName(string fileExtension)
        {
            string newFileName = Path.GetFileNameWithoutExtension(Path.GetRandomFileName());

            if (newFileName.Length > 40)
                newFileName = newFileName.Substring(0, 40);

            newFileName += fileExtension;
            return newFileName;
        }
    }
}
