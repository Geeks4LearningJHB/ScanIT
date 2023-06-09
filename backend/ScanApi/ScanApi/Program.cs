using Microsoft.EntityFrameworkCore;
using Serilog;
using System.Reflection;
using UserService.DBContext;
using UserService.Interfaces;
using UserService.Repository;
using UserService.Services;

var builder = WebApplication.CreateBuilder(args);

// Set up Serilog logger
Log.Logger = new LoggerConfiguration()
    .WriteTo.File($"Logs/Api.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

// Add Serilog logger to the logging pipeline
builder.Logging.AddSerilog();

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddLogging();

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserServices>();

// Add CORS policy
var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();

builder.Services.AddCors(options =>
{
    var frontendURL = configuration.GetValue<string>("frontendUrl");

    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
});


builder.Services.AddDbContext<UserDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("UserService"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();// Enable CORS middleware
app.UseAuthorization();

app.MapControllers();
app.Run();
