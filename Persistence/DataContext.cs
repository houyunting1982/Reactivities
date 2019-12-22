using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        //public DataContext(DbContextOptions options) : base(options)
        //{            
        //}

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; } // For the table name inside SQLite
        public DbSet<Activity> Activities { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            builder.Entity<Value>()
                .HasData (
                    new Value {Id = 1, Name = "Value 101"},
                    new Value {Id = 2, Name = "Value 102"},
                    new Value {Id = 3, Name = "Value 103"}
                );
        }
    }
}
