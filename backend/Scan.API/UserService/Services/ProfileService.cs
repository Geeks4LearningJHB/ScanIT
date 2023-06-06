using UserService.Dtos;
using UserService.Interfaces;

namespace UserService.Services
{
    public class ProfileService : IProfileService
    {
        UserResponse IProfileService.CreateProfile(ProfileRequest profileRequest)
        {
            throw new NotImplementedException();
        }

        UserResponse IProfileService.DeleteProfile(ProfileRequest profileRequest)
        {
            throw new NotImplementedException();
        }

        List<UserResponse> IProfileService.GetAllProfiles()
        {
            throw new NotImplementedException();
        }

        UserRequest IProfileService.GetProfileById(Guid profileId)
        {
            throw new NotImplementedException();
        }

        UserResponse IProfileService.UpdateProfile(Guid profileId, ProfileRequest profileRequest)
        {
            throw new NotImplementedException();
        }
    }
}
