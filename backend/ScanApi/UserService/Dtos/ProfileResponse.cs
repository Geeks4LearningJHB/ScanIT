using UserService.Enum;
using UserService.Model;

namespace UserService.Dtos
{
    public class ProfileResponse
    {
        public Gender Gender { get; set; }
        public string? Experience { get; set; }
        public string? Education { get; set; }
        public string? PhoneNumber { get; set; }
        public List<SkillResponse>? Skills { get; set; }
        public string? ProffesionalSummary { get; set; }
    }
}
