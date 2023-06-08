using UserService.Dtos;

namespace UserService.Interfaces
{
    public interface IProfileService
    {
        UserResponse CreateProfile(ProfileRequest profileRequest);
        List<UserResponse> GetAllProfiles();
        UserRequest GetProfileById(Guid profileId);
        UserResponse UpdateProfile(Guid profileId,ProfileRequest profileRequest);
        UserResponse DeleteProfile(ProfileRequest profileRequest);
    }
}
