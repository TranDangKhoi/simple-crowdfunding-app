import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";

import { saveToken } from "utils/auth";

import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-requests";
import { authUpdateUser } from "./auth-slice";

export function* handleAuthRegister({ payload }) {
  try {
    const res = yield call(requestAuthRegister, payload);
    // Nếu đăng kí thành công - status trả về 201, thì thông báo cho người dùng biết
    if (res.status === 201) {
      toast.success("Account registered successfully");
    }
  } catch (err) {
    console.log(err);
    toast.error("E-mail address existed, please use another one!");
    return err;
  }
}

export function* handleAuthLogin({ payload }) {
  try {
    const res = yield call(requestAuthLogin, payload);
    console.log(res);
    // Khi login thì phải lưu 2 token vào cookie
    if (res.data.accessToken && res.data.refreshToken) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield call(handleFetchMe, { payload: res.data.accessToken });
    }
    toast.success("Login successfully");
  } catch (error) {
    toast.error("Your username or password is incorrect!");
    console.log(error);
  }
}

export function* handleFetchMe({ payload }) {
  try {
    const res = yield call(requestAuthFetchMe, payload);
    // Nếu status khi get "/me" trả về 200 thì lưu vào store thông tin của user và access token của user
    if (res.status === 200) {
      yield put(
        authUpdateUser({
          user: res.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function* handleAuthRefreshToken({ payload }) {
  try {
    // response sẽ trả về data bao gồm access token và refresh token
    const res = yield call(requestAuthRefreshToken, payload);
    // nhiệm vụ của ta là lưu chúng vào cookies để lấy lại. Để sau này khi reload lại trang
    // Ta sẽ không cần phải đăng nhập lại, mà chương trình sẽ tìm trong cookie và lấy lại cho ta 2 cái token này
    if (res.data) {
      saveToken(res.data.accessToken, res.data.refreshToken);
      yield call(handleFetchMe, { payload: res.data.accessToken });
    } else {
      // logOut()
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
