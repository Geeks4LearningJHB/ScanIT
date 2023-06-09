namespace UserService.Model
{
    public class User : BaseEntity
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public bool PasswordConfirmed { get; set; } = false;
        public Profiles? Profiles { get; set; }
    }
}
