using Microsoft.EntityFrameworkCore;
using UserService.Model;

namespace UserService.DBContext
{
    public class UserDbContext:DbContext
    {
        public UserDbContext(DbContextOptions options) : base(options) { }   

        public DbSet<User> Users { get; set; }
        public DbSet<Skill> Skills { get; set; }    
        public DbSet<Profiles> Profiles { get; set; }   
    }
}