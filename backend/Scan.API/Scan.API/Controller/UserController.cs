using Microsoft.AspNetCore.Mvc;
using UserService.Dtos;
using UserService.Interfaces;

namespace Scan.API.Controller
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService) {
          _userService = userService;
        }

        [HttpPost(Name = "CreateUser")]
        public IActionResult CreateUser(UserRequest userRequest)
        {
           return Ok(_userService.CreateUserAsync(userRequest));
        }
    }
}
