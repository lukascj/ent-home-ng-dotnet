using Microsoft.EntityFrameworkCore;

namespace EntApi.Models;

// Inställningar för databas-koppling
public class EntDbContext(DbContextOptions<EntDbContext> options) : DbContext(options)
{
    public DbSet<Ent> Ents { get; set; }
    public DbSet<User> Users { get; set; }
}