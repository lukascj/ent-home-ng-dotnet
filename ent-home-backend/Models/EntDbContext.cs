using Microsoft.EntityFrameworkCore;

namespace ent_home_backend.Models;

// Inställningar för databas-koppling:
public class EntDbContext(DbContextOptions<EntDbContext> options) : DbContext(options)
{
    // Modell-klasserna:
    public DbSet<Ent> Ents { get; set; }
    public DbSet<User> Users { get; set; }
}