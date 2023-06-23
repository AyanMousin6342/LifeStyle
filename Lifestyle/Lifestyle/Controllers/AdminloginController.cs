using Lifestyle.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860



namespace Lifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminloginController : ControllerBase
    {

        private readonly MyDatabaseContext con;
        private readonly IConfiguration _config;
        public AdminloginController(IConfiguration config, MyDatabaseContext context)
        {
            con = context;
            _config = config;

        }
        [HttpPost("LoginAdmin")]
        public IActionResult Create1(AdminLogin admin)
        {
            var admintrue = con.AdminLogin.FirstOrDefault(u => u.Email == admin.Email && u.Password == admin.Password);

            if (admintrue != null)
            {
                return Ok("success");
            }
            return Ok("failure");
        }
    }
}

