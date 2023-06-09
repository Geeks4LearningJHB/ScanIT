using AutoMapper;
using UserService.Dtos;
using UserService.Interfaces;
using UserService.Model;

namespace UserService.Services
{
    public class UserServices : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserServices(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<UserResponse> CreateUserAsync(UserRequest userRequest)
        {
            var userToAdd = _mapper.Map<User>(userRequest);
            var user = await _userRepository.CreateUserAsync(userToAdd);
            var response = _mapper.Map<UserResponse>(user);
            return response;
        }

        public async Task<UserResponse> DeleteUserAsync(UserRequest userRequest)
        {
            var user = _mapper.Map<User>(userRequest);
            await _userRepository.DeleteUserAsync(user);
            var userResponse = _mapper.Map<UserResponse>(user);
            return userResponse;
        }

        public async Task<List<UserResponse>> GetAllUsersAsync()
        {
            var users = await _userRepository.GetAllUsersAsync();
            var response = _mapper.Map<List<UserResponse>>(users);
            return response;
        }

        public async Task<UserResponse> GetUserByIdAsync(Guid userId)
        {
            var user = await _userRepository.GetUserByIdAsync(userId);
            var userResponse = _mapper.Map<UserResponse>(user);
            return userResponse;
        }

        public async Task<UserResponse> LoginAsync(LoginRequest loginRequest)
        {
            var login = _mapper.Map<Login>(loginRequest);
            var user = await _userRepository.LoginAsync(login);
            var userResponse = _mapper.Map<UserResponse>(user);
            return userResponse;
        }

        public async Task<UserResponse> UpdateUserAsync(Guid userId, UserRequest userRequest)
        {
            _ = await _userRepository.GetUserByIdAsync(userId) ?? throw new Exception("User not found");
            var userToUpdate = _mapper.Map<User>(userRequest);
            await _userRepository.UpdateUserAsync(userId, userToUpdate);
            var userResponse = _mapper.Map<UserResponse>(userToUpdate);
            return userResponse;
        }
    }
}
