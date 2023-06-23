using Lifestyle.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



namespace Lifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserFeedback : ControllerBase
    {
        private readonly MyDatabaseContext _context;
        public UserFeedback(MyDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public IActionResult Get()
        {
            var feed = _context.Feedbacks.ToList();
            return Ok(feed);
        }




        [HttpPost("createFeedback")]
        public IActionResult CreateFeedback(Feedback feedback)
        {
            _context.Feedbacks.Add(feedback);
            _context.SaveChanges();



            return CreatedAtAction(nameof(CreateFeedback), feedback);
        }




    }
}