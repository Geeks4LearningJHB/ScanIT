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

        public UserServices(IUserRepository userRepository,IMapper  mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }
        public UserResponse CreateUserAsync(UserRequest userRequest)
        {
            User userToAdd = _mapper.Map<User>(userRequest);
            User user = _userRepository.CreateUserAsync(userToAdd);
            UserResponse response = _mapper.Map<UserResponse>(user);
            return response;
        }

        public UserResponse DeleteUserAsync(UserRequest userRequest)
        {
            throw new NotImplementedException();
        }

        public List<UserResponse> GetAllUsersAsync()
        {
            throw new NotImplementedException();
        }

        public UserRequest GetUserByIdAsync(Guid userId)
        {
            throw new NotImplementedException();
        }

        public UserResponse UpdateUserAsync(Guid userId, UserRequest userRequest)
        {
            throw new NotImplementedException();
        }
    }
}
