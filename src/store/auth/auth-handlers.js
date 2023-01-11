import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-requests";
export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const res = yield call(requestAuthRegister, payload);
    if (res.status === 201) {
      toast.success("Account registered successfully");
    }
  } catch (err) {
    console.log(err);
    toast.error("E-mail address existed, please use another one!");
    return err;
  }
}
