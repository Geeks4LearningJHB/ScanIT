﻿using UserService.Model;

namespace UserService.Dtos
{
    public class UserRequest
    {
        public string? FirstName { get; set; }
        public string? Email { get; set; }
        public string? LastName { get; set; }
        public string? Password { get; set; }
        public bool PasswordConfirmed { get; set; } = false;
        public ProfileRequest? Profiles { get; set; }
    }
}
