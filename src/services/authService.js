import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const tokenKey = "token";

http.setJwt(getJwt());

export async function loginUser(user) {
  const { data: jwt } = await http.post(config.authEndpoint, {
    email: user.username,
    password: user.password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export async function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    return user;
  } catch (e) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  loginUser,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
