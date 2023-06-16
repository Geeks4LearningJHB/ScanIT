export const passwordMismatch = (password, confirmPassword) => {
  return confirmPassword !== password;
};
export const validateLength = (password) => {
  return password.length < 6;
};

export const isEmpty = (name, surname, email, password) => {
  return (
    name.length !== 0 &&
    surname.length !== 0 &&
    email.length !== 0 &&
    password.length !== 0
  );
};
export const isValidExperience = (newObj) => {
  return newObj.company != "" && newObj.position != "" && newObj.duration != "";
};
export const isValidSkill = (newObj) => {
  return newObj.skill != "" && newObj.proficiency != "";
};
export const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const phoneLength = (number) => {
  return number.length > 9;
};
export const isNotEmpty = (
  firstName,
  lastName,
  emailAddress,
  houseAddress,
  gender,
  experience,
  EducationInforArray,
  phoneNumber,
  skills,
  professionalSummary,
  profilePicture
) => {
  return (
    firstName.length !== 0 &&
    lastName.length !== 0 &&
    emailAddress.length !== 0 &&
    gender.length !== 0 &&
    // experience.length !== 0 &&
    // EducationInforArray.length !== 0 &&
    phoneNumber.length !== 0 &&
    //skills.length !== 0 &&
    professionalSummary.length !== 0 &&
    profilePicture.length !== 0
  );
};
export const isValidEmail = (email) => {
  return !email.includes("@");
};
const isValidPhoneNumber = (phoneNumber) => {
  const phonePattern = "/^[0-9]{10}$/";

  return phonePattern.test(phoneNumber);
};
