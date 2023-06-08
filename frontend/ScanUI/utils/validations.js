export function isValidUserInput(
  name,
  surname,
  email,
  password,
  confirmPassword
) {
  if (!isValidEmail) return "email";
  if (!validateLength) return "length";
  if (isEmpty(name, surname, email, password, confirmPassword)) return "empty";
}

const isValidEmail = () => {
  return email.includes("@");
};

const validateLength = () => {
  return password.length > 3;
};

const isEmpty = (name, surname, email, password, confirmPassword) => {
  return (
    name === "" ||
    surname === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  );
};
