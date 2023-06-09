using UserService.Dtos;
using UserService.Model;

namespace UserService.Interfaces
{
    public interface IUserRepository
    {
        Task<User> CreateUserAsync(User user);
        Task<List<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(Guid userId);
        Task<User> UpdateUserAsync(Guid userId, User user);
        Task<User> DeleteUserAsync(User user);
        Task<User> LoginAsync(Login login);
    }
}
