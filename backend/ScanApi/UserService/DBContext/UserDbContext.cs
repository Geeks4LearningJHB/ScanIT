using Microsoft.EntityFrameworkCore;
using UserService.Model;

namespace UserService.DBContext
{
    public class UserDbContext:DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }   

        public DbSet<User> Users { get; set; }
        public DbSet<Skill> Skills { get; set; }    
        public DbSet<Profile> Profiles { get; set; }   
    }
}