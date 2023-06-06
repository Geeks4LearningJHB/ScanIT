using UserService.Model;

namespace UserService.Dtos
{
    public class UserResponse
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public ProfileResponse? Profile { get; set; }
    }
}
