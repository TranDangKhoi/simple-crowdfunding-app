import axios from "api/axios";
import { authUpdateUser } from "store/auth/auth-slice";
import { getToken, saveToken } from "utils/auth";

// Hàm để trả ra access_token thông qua hàm getToken()
export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    if (!refresh_token) return null;
    const res = await axios.post("/token", {
      "Content-Type": "application/json",
      refreshToken: refresh_token,
    });
    if (res.data) {
      authUpdateUser((prev) => ({
        ...prev,
        accessToken: res?.data?.accessToken,
      }));
      saveToken(res.data.accessToken, res.data.refreshToken);
    }
    return res.data.accessToken || "";
  }
  return {
    refresh,
  };
}
