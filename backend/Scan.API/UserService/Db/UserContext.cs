using Microsoft.EntityFrameworkCore;
using UserService.Model;

namespace UserService.Db
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }   

        public DbSet<User> Users { get; set; }
        public DbSet<Skill> Skills { get; set; }    
        public DbSet<Profile> Profiles { get; set; }   
    }
}
