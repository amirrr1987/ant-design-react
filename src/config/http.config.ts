// http.ts یا axios.instance.ts
import { useAuthHttp } from '@/http/auth.http';
import type { IAuth } from '@/models/auth.model';
import type { IResult } from '@/models/result.model';
import { isoToTimestamp } from '@/utils/time.util';
import { message } from 'antd';
import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { t } from 'i18next';

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: string | null) => void;
  reject: (reason?: Error) => void;
}> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - فقط توکن رو بذار
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const raw = localStorage.getItem('auth');
  if (raw) {
    try {
      const { access_token }: IAuth.RefreshToken.Res =
        JSON.parse(raw);
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    } catch {}
  }
  return config;
});

// Response Interceptor - با Refresh Token هوشمند
http.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<IResult<null>>) => {
    if (error.response?.data.statusCode === 404) {
      localStorage.removeItem('auth');
      window.location.href = '/auth/login';
      return Promise.reject(error);
    }

    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // اگه یکی دیگه داره refresh می‌کنه، این درخواست منتظر بمونه
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return http(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const raw = localStorage.getItem('auth');
        if (!raw) throw new Error('No auth data');

        const auth: IAuth.RefreshToken.Res = JSON.parse(raw);
        const now = Date.now();
        const refreshExpiresAt = isoToTimestamp(auth.refresh_expires_in);

        // اگه refresh token هم expire شده باشه
        if (!auth.refresh_token || now >= refreshExpiresAt) {
          throw new Error('Refresh token expired');
        }
        const authHttp = useAuthHttp();

        // فقط یک درخواست refresh
        const { data } = await authHttp.refreshToken({
          token: auth.access_token,
          refreshToken: auth.refresh_token,
        });
        if (!data?.access_token) {
          throw new Error('Refresh failed - no access token');
        }

        // ذخیره توکن جدید
        localStorage.setItem('auth', JSON.stringify(data));

        // همه درخواست‌های منتظر رو با توکن جدید ادامه بده
        processQueue(null, data.access_token);

        // درخواست اصلی رو دوباره بزن
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
        return http(originalRequest);
      } catch (refreshError) {

        // اگه refresh کاملاً شکست → همه رو رد کن و برو لاگین
        processQueue(refreshError as Error | null);
        localStorage.removeItem('auth');
        window.location.href = '/auth/login'; // یا emit event
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    const msg = error.response?.data.message || t('common.serverError');
    message.error(msg)
    // خطاهای دیگه (غیر 401)
    // const msg = error.response?.data?.message || t('common.serverError');
    // if (msg && msg !== 'Unauthorized') {
    //   getMessageApi().error(msg);
    // }

    return Promise.reject(error);
  },
);

export { http };
