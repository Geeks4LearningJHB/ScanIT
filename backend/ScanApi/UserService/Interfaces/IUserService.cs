using UserService.Dtos;

namespace UserService.Interfaces
{
    public interface IUserService
    {
        UserResponse CreateUserAsync(UserRequest userRequest);
        List<UserResponse> GetAllUsersAsync();
        UserRequest GetUserByIdAsync(Guid userId);
        UserResponse UpdateUserAsync(Guid userId, UserRequest userRequest);
        UserResponse DeleteUserAsync(UserRequest userRequest);
    }
}
