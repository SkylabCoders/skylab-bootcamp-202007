import { changePassword } from "../actions/authActions";

export async function changePasswordService(
  user,
  password,
  newPassword,
  _newPassword
) {
  let message = "";
  if (!password || !newPassword || !_newPassword) {
    message = "Password is required";
  } else if (newPassword !== _newPassword) {
    message = "Passwords don't match";
  } else {
    const name = user.name;
    const params = { name, password, newPassword };
    await changePassword(params);
  }
}
