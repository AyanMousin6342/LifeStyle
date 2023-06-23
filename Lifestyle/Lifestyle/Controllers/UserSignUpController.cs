using Lifestyle.Models;
using Microsoft.AspNetCore.Mvc;
using Lifestyle.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text;



namespace Lifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSignUpController : Controller
    {
        private readonly MyDatabaseContext conn;
        public UserSignUpController(IConfiguration config, MyDatabaseContext context)
        {
            conn = context;
        }





        [HttpGet]
        public IActionResult Get()
        {
            return Ok(conn.Users.ToList());
        }





        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = conn.Users.FirstOrDefault(u => u.user_id == id);
            if (user == null)
                return NotFound();





            return Ok(user);
        }






        [HttpPost("addUser")]
        public IActionResult AddUser(UserSignup userSignUp)
        {
            var obj = conn.Users.FirstOrDefault(u => u.email == userSignUp.email && u.password == userSignUp.password);
            if (obj != null)
                return Ok("Already Exists");



            conn.Users.Add(userSignUp);
            conn.SaveChanges();





            return CreatedAtAction(nameof(GetById), new { Id = userSignUp.user_id }, userSignUp);
        }




        [HttpPost("userLogin")]
        public IActionResult Login(UserSignIn request)
        {
            var user = conn.Users.FirstOrDefault(u => u.email == request.email && u.password == request.password);
            if (user != null)
            {
                return Ok(new { message = "Login successful", id = user.user_id });
            }



            return Unauthorized(new { message = "Invalid username or password" });
        }





    }
    public class UserSignIn
    {
        [Required]
        public string? email { get; set; }



        [Required]
        public string? password { get; set; }
    }
}
