import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/user/login`, params);
};

// * 用户注册接口
export const signupApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/user/register`, params);
};

// * 获取按钮权限
export const getAuthButtons = () => {
  return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`);
};

// * 获取菜单列表
export const getMenuList = () => {
  return http.get<Menu.MenuOptions[]>(`/admin/menu/list`);
};

export const refreshToken = (params: { uuid: string; id: number }) => {
  return http.post<Login.ResLogin>(`/user/refreshToken/` + params.id, params);
};
