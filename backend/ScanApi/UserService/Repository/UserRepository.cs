using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserService.DBContext;
using UserService.Interfaces;
using UserService.Model;

namespace UserService.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDbContext _userDbContext;

        public UserRepository(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }

        public async Task<User> CreateUserAsync(User user)
        {
            var userToAdd = await GetUserByEmailAsync(user.Email);
            if (userToAdd != null)
            {
                throw new Exception($"User with email {user.Email} already exists");
            }

            _userDbContext.Users.Add(user);
            await _userDbContext.SaveChangesAsync();
            return user;
        }

        public async Task<User> DeleteUserAsync(User user)
        {
            var userToDelete = await GetUserByEmailAsync(user.Email) ?? throw new Exception("User does not exist");
            _userDbContext.Users.Remove(userToDelete);
            await _userDbContext.SaveChangesAsync();
            return userToDelete;
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _userDbContext.Users
                .Include(user => user.Profiles)
                .ThenInclude(profile => profile.Skills)
                .ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(Guid userId)
        {
            return await _userDbContext.Users
                .Include(user => user.Profiles)
                .ThenInclude(profile => profile.Skills)
                .FirstOrDefaultAsync(user => user.Id == userId);
        }

        public async Task<User> LoginAsync(Login login)
        {
            var user = await _userDbContext.Users.Include(user => user.Profiles).ThenInclude(profile => profile.Skills)
                .FirstOrDefaultAsync(user => user.Email == login.Email && user.Password == login.Password);
            return user ?? throw new Exception("User does not exist");
        }

        public async Task<User> UpdateUserAsync(Guid userId, User user)
        {
            var userToUpdate = await _userDbContext.Users
                .Include(u => u.Profiles)
                .ThenInclude(p => p.Skills)
                .FirstOrDefaultAsync(u => u.Id == userId);

            if (userToUpdate != null)
            {
                userToUpdate.FirstName = user.FirstName;
                userToUpdate.LastName = user.LastName;
                userToUpdate.Email = user.Email;
                userToUpdate.Password = user.Password;
                userToUpdate.Profiles = user.Profiles;

                await _userDbContext.SaveChangesAsync();
            }

            return userToUpdate;
        }

        private Task<User> GetUserByEmailAsync(string email)
        {
            return _userDbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
    }
}
