import { axiosPrivate } from "api/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequestConfig = error.config;
        if (error?.response?.status === 403 && !prevRequestConfig.sent) {
          prevRequestConfig.sent = true;
          const newAccessToken = await refresh();
          prevRequestConfig.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequestConfig);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.accessToken, refresh]);
  return axiosPrivate;
}
