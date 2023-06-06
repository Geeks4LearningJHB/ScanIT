using Microsoft.EntityFrameworkCore;
using UserService.Db;
using UserService.Dtos;
using UserService.Interfaces;
using UserService.Model;

namespace UserService.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly UserContext _userContext;

        public UserRepository(UserContext userContext) { 
            _userContext = userContext;
        }

        public User CreateUserAsync(User user)
        {
            try
            {
                _userContext.Users.Add(user);
                _userContext.SaveChanges();
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

        public Task<List<User>> GetAllUsersAsync()
        {
            throw new NotImplementedException();
        }
        public async Task<User> GetUserByIdAsync(Guid userId)
        {
            try
            {
                return await _userContext.Users.FirstOrDefaultAsync(user => user.Id == userId);
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
