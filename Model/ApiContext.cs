using Microsoft.EntityFrameworkCore;


namespace Pokédex.Model
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

        public DbSet<Pokemon> Pokemon { get; set; }
    }
}
