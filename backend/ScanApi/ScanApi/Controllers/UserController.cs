using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserService.Dtos;
using UserService.Interfaces;

namespace ScanApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService) { 
         _userService = userService;
        }

        [HttpGet(Name = "Get all users")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users =await _userService.GetAllUsersAsync();
            return Ok(users);
        }


        [HttpPost(Name = "Create user")]
        public async Task<IActionResult> CreateUser(UserRequest  userRequest)
        {
            var users = await _userService.CreateUserAsync(userRequest);
            return Ok(users);
        }
    }
}
