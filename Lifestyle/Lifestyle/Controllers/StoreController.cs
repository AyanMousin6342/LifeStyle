using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lifestyle.Models;
using System.Collections.Generic;



namespace Lifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly MyDatabaseContext _dbContext;



        public StoreController(MyDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }



        [HttpGet("categories/{categoryName}")]
        public ActionResult<IEnumerable<Getstoreprocedure>> GetCategoryData(string categoryName)
        {
            var storeData = _dbContext.GetCategoryReportsData(categoryName);
            return Ok(storeData);
        }
    }
}