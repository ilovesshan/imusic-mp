import { get, post } from "./request"

interface IUserInfo {
  username: string,
  password: string,
}

export const login = (userInfo: IUserInfo) => {
  return post("/auth", userInfo);
}

export const getUserInfo = (id: string) => {
  return get(`/users/${id}`);
}