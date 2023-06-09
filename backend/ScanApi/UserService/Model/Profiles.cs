﻿using UserService.Enum;

namespace UserService.Model
{
    public class Profiles: BaseEntity
    {
        public Gender Gender { get; set; }
        public string? Experience { get; set; }
        public string? Education { get; set; }
        public string? PhoneNumber { get; set; }
        public List<Skill>? Skills { get; set; }
        public string? professionalSummary { get;set; }
    }
}
