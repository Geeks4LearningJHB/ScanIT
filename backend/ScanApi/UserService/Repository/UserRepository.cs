using Microsoft.EntityFrameworkCore;
using UserService.DBContext;
using UserService.Interfaces;
using UserService.Model;

namespace UserService.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly UserDbContext _userDbContext;

        public UserRepository(UserDbContext userDbContext) {
            _userDbContext = userDbContext;
        }

        public async Task<User> CreateUserAsync(User user)
        {
            try
            {
                _userDbContext.Users.Add(user);
                _userDbContext.SaveChanges();
                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Task<User> DeleteUserAsync(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            List<User> users = await _userDbContext.Users.ToListAsync();
            return users;
        }
        public async Task<User> GetUserByIdAsync(Guid userId)
        {
            try
            {
                return await _userDbContext.Users.FirstOrDefaultAsync(user => user.Id == userId);
            }
            catch (Exception)
            {
                throw;
            }
        }



        public Task<User> UpdateUserAsync(Guid userId, User user)
        {
            throw new NotImplementedException();
        }
    }
}
