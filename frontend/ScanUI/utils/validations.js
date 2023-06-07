export function isValidUserInput(
  name,
  surname,
  username,
  password,
  confirmPassword
) {
  if (!isValidEmail) return "email";
  if (!validateLength) return "length";
  if (isEmpty(name, surname, username, password, confirmPassword))
    return "empty";
}

const isValidEmail = () => {
  return email.includes("@");
};

const validateLength = () => {
  return password.length > 3;
};

const isEmpty = (name, surname, username, password, confirmPassword) => {
  return (
    name === "" ||
    surname === "" ||
    username === "" ||
    password === "" ||
    confirmPassword === ""
  );
};
