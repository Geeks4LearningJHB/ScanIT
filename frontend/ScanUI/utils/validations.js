
export const passwordMismatch = (password, confirmPassword) => {
  return confirmPassword !== password;
};
export const validateLength = (password) => {
  return password.length < 6;
};

export const isEmpty = (name, surname, email, password) => {
  return (
    name.length !== 0 ||
    surname.length !== 0 ||
    email.length !== 0 ||
    password.length !== 0
  );
};
export const isValidEmail = (email) => {
  return !email.includes("@");
};
