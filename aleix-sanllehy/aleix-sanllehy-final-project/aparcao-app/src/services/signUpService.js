import { signUp } from "../actions/authActions";

export function signUpService(name, email, password, _password) {
  const [userLatitude, userLongitude, carLength] = [undefined, undefined, 9999];
  let message = "";
  if (!password || !_password) {
    message = "Password is required";
  } else if (password !== _password) {
    message = "Passwords don't match";
  } else {
    const params = {
      name,
      email,
      password,
      userLatitude,
      userLongitude,
      carLength,
    };
    signUp(params);
  }
}
