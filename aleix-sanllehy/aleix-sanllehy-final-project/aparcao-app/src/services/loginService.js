import { login } from "../actions/authActions";

export function loginService(name, password) {
  const params = { name, password };
  login(params);
}
