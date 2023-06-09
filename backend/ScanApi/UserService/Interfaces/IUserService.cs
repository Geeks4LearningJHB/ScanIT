using UserService.Dtos;

namespace UserService.Interfaces
{
    public interface IUserService
    {
        Task<UserResponse> CreateUserAsync(UserRequest userRequest);
        Task<List<UserResponse>> GetAllUsersAsync();
        Task<UserResponse> GetUserByIdAsync(Guid userId);
        Task<UserResponse> UpdateUserAsync(Guid userId, UserRequest userRequest);
        Task<UserResponse> DeleteUserAsync(UserRequest userRequest);
        Task<UserResponse> LoginAsync(LoginRequest loginRequest);
    }
}
