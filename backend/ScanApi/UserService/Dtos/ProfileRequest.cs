using UserService.Enum;
using UserService.Model;

namespace UserService.Dtos
{
    public class ProfileRequest
    {
        public Gender Gender { get; set; }
        public string? Experience { get; set; }
        public string? Education { get; set; }
        public string? PhoneNumber { get; set; }
        public List<SkillRequest>? Skills { get; set; }
        public string? professionalSummary { get; set; }
    }
}
