using System;
using System.Collections.Generic;
using System.Linq;

using UserService.Dtos;
using UserService.Model;

namespace AutoMapper
{
    public class AutoMapperConfig: Profile
    {

        public AutoMapperConfig() {
            CreateMap<UserRequest, User>().ReverseMap();
            CreateMap<User, UserResponse>().ReverseMap();
      
            CreateMap<SkillRequest, Skill>().ReverseMap();
            CreateMap<Skill, SkillResponse>().ReverseMap();

            CreateMap<ProfileRequest, Profiles>().ReverseMap();
            CreateMap<Profiles, ProfileResponse>().ReverseMap();

            CreateMap<LoginRequest, Login>().ReverseMap();
        }
    }
}

