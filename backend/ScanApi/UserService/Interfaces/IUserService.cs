using UserService.Dtos;

namespace UserService.Interfaces
{
    public interface IUserService
    {
        Task<UserResponse> CreateUserAsync(UserRequest userRequest);
        Task<List<UserResponse>> GetAllUsersAsync();
        UserRequest GetUserByIdAsync(Guid userId);
        UserResponse UpdateUserAsync(Guid userId, UserRequest userRequest);
        UserResponse DeleteUserAsync(UserRequest userRequest);
    }
}
