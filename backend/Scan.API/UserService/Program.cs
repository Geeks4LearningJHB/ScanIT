using Microsoft.EntityFrameworkCore;

using System.Reflection;
using UserService.Db;
using UserService.Interfaces;
using UserService.Repository;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

builder.Services.AddScoped<IUserRepository, UserRepository>();

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddDbContext<UserContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
    options.EnableSensitiveDataLogging();
    }
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
