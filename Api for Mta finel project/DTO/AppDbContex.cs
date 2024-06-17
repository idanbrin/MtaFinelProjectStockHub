

using Api_for_Mta_finel_project.Models;
using Microsoft.EntityFrameworkCore;
namespace Api_for_Mta_finel_project.Data
{
   

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // DbSet properties representing your database tables
        public   DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
}
