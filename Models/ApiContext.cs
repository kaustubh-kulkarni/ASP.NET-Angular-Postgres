using Microsoft.EntityFrameworkCore;
namespace ngSight.Models
{
        public class ApiContext: DbContext{
            public ApiContext(DbContextOptions<ApiContext> options) : base(options){}

            public DbSet<customer> Customers {get; set;}
            public DbSet<Order> Orders {get; set;}
            public DbSet<Server> Servers {get; set;}
        }
}