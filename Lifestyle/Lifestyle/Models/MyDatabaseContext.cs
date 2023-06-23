using Microsoft.EntityFrameworkCore;
using Lifestyle.Models;
using Microsoft.Data.SqlClient;

namespace Lifestyle.Models
{
    public class MyDatabaseContext : DbContext
    {
        public MyDatabaseContext(DbContextOptions<MyDatabaseContext> options)
            : base(options)
        {
        }
        public DbSet<AdminLogin> AdminLogin { get; set; }
        public DbSet<UserSignup> Users { get; set; }
        public DbSet<Category> categories { get; set;}
        public DbSet<inventory> Inventories { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }

        public DbSet<Getstoreprocedure> StoreData { get; set; }
         public IEnumerable<Getstoreprocedure> GetCategoryReportsData(string categoryName)
        {
            var categoryNameParam = new SqlParameter("@categoryName", categoryName);
            return StoreData.FromSqlRaw<Getstoreprocedure>("EXEC GetCategoryReportsData @categoryName", categoryNameParam);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Getstoreprocedure>().HasNoKey();
        }
    }
}
