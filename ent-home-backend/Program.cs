using Microsoft.EntityFrameworkCore;
using ent_home_backend.Models;

static EntDbContext GetContext(IServiceProvider serviceProvider) 
{
    IServiceScope scope = serviceProvider.CreateScope();
    IServiceProvider services = scope.ServiceProvider;
    return services.GetRequiredService<EntDbContext>();
}
static void ResetDb(EntDbContext context) 
{
    context.Database.ExecuteSqlRaw("DROP SCHEMA public CASCADE;");
    context.Database.ExecuteSqlRaw("CREATE SCHEMA public;");
}

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "Allow EntHome", policy  => 
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyHeader(); 
    });
});

// Add services to the container.
var conn = builder.Configuration.GetConnectionString("DefaultConnection"); // Hämtar ConnectionString från appsettings.json
builder.Services.AddDbContext<EntDbContext>(opt => {
    opt.UseNpgsql(conn);
}); // Registrerar EntDbContext så att appen kan använda den där den behövs.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddRouting(options => options.LowercaseUrls = true);
builder.Services.AddSwaggerGen();

var app = builder.Build();

if(args.Contains("reset")) // "reset" är ett argument som kan skickas med när man kör: "dotnet run reset".
{
    EntDbContext dbContext = GetContext(app.Services);
    ResetDb(dbContext);
    return;
}

app.MapGet("/", () => "Hello World.");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("Allow EntHome");
app.UseAuthorization();
app.MapControllers();
app.Run();
