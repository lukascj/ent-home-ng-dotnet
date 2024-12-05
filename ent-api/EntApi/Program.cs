using Microsoft.EntityFrameworkCore;
using EntApi.Models;
using DotNetEnv;

// Funktion som hämtar existerande DbContext
static EntDbContext GetContext(IServiceProvider serviceProvider) 
{
    IServiceScope scope = serviceProvider.CreateScope();
    IServiceProvider services = scope.ServiceProvider;
    return services.GetRequiredService<EntDbContext>();
}

// Funktion som nollställer databasen.
// Raderar alla databasens tabeller och redogör databasen för nya
static void ResetDb(EntDbContext context) 
{
    context.Database.ExecuteSqlRaw("DROP SCHEMA public CASCADE;");
    context.Database.ExecuteSqlRaw("CREATE SCHEMA public;");
}

// Skapar app-byggare för konfigurering
var builder = WebApplication.CreateBuilder(args);

// Lägger till CORS 
// "builder.Services" är en slags DI-container för applikationen
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "Allow EntHome", policy  => 
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyHeader(); 
    });
});

// Laddar in .env fil
Env.Load();

// Lägger till miljö variablerna i konfigurationen
builder.Configuration.AddEnvironmentVariables();

// Hämtar ConnectionString från appsettings.json
var conn = builder.Configuration.GetConnectionString("DefaultConnection"); 

// Registrerar "EntDbContext" så att appen kan använda den vid behov.
// "DbContext" är en klass som representerar en session mellan din applikation och databasen.
// Den hanterar databasoperationer och mappning mellan objektmodeller och relationella databastabeller.
// DbContext används för att utföra CRUD-operationer på data i databasen
builder.Services.AddDbContext<EntDbContext>(options => {
    // "NPGSQL" är dataleverantören för PostgreSQL.
    // Kopplar till Postgres-instansen med hjälp av vår ConnectionString
    options.UseNpgsql(conn);
}); 

// Registrerar kontrollrar
builder.Services.AddControllers();


builder.Services.AddEndpointsApiExplorer();

// Gör routerna till lowercase
builder.Services.AddRouting(options => options.LowercaseUrls = true);

// Lägger till swagger
builder.Services.AddSwaggerGen();

// Kör app-byggaren
var app = builder.Build();

// Nollställer databasen
// "reset" är ett argument som kan skickas med när man kör programmet
// "dotnet run reset" kommer alltså nollställa databasen
if (args.Contains("reset")) 
{
    EntDbContext dbContext = GetContext(app.Services);
    ResetDb(dbContext);
    return;
}

// Mappar text till index-sidan
app.MapGet("/", () => "Hello Spock.");

// Om appen är i utvecklingsmiljö
if (app.Environment.IsDevelopment())
{
    // Konfigurerar Swagger applikationen med UI och allt.
    // Swagger tillåter testning av diverse requests
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Tillåt redirect
app.UseHttpsRedirection();

// Använd CORS:en som vi skapade
app.UseCors("Allow EntHome");

// Använd auktorisering
app.UseAuthorization();

// Mappa kontrollrar
app.MapControllers();

// Slutligen, kör
app.Run();