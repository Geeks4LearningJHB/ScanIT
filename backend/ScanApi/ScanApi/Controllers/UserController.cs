using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using UserService.Dtos;
using UserService.Interfaces;

namespace ScanApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet(Name = "Get all users")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        [HttpGet("{userId}", Name = "Get user")]
        public async Task<IActionResult> GetUser(Guid userId)
        {
            var user = await _userService.GetUserByIdAsync(userId);
            return Ok(user);
        }

        [HttpPost(Name = "Create user")]
        public async Task<IActionResult> CreateUser([FromBody] UserRequest userRequest)
        {
            var user = await _userService.CreateUserAsync(userRequest);
            return Ok(user);
        }

        [HttpPost("login/", Name = "Login user")]
        public async Task<IActionResult> LoginUser(LoginRequest loginRequest)
        {
            var user = await _userService.LoginAsync(loginRequest);
            return Ok(user);
        }

        [HttpPut("{userId}", Name = "Update user")]
        public async Task<IActionResult> UpdateUser(Guid userId, [FromBody] UserRequest userRequest)
        {
            var user = await _userService.UpdateUserAsync(userId, userRequest);
            return Ok(user);
        }

        [HttpDelete(Name = "Delete user")]
        public async Task<IActionResult> DeleteUser([FromBody] UserRequest userRequest)
        {
            var user = await _userService.DeleteUserAsync(userRequest);
            return Ok(user);
        }
    }
}
