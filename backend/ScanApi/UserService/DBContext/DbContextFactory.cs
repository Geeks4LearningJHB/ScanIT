using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace UserService.DBContext
{
    public class DbContextFactory
    {
      //  public static IConfigurationRoot Configuration { get; set; }
        public static UserDbContext CreateDbContext()
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<UserDbContext>();
            optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));

            return new UserDbContext(optionsBuilder.Options);
        }
    }
}
