import { takeLatest } from "redux-saga/effects";
import {
  handleAuthLogin,
  handleAuthRefreshToken,
  handleAuthRegister,
} from "./auth-handlers";

import { authLogin, authRefreshToken, authRegister } from "./auth-slice";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
}
