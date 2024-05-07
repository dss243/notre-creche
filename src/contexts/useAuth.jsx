import { useEffect, useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  const refresh = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/refresh', {
        refreshToken: refreshToken
      });

      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const authInterceptor = axios.create({
      baseURL: 'http://localhost:8080'
    });

    authInterceptor.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 && refreshToken) {
          await refresh();
          return authInterceptor.request(error.config);
        }
        throw error;
      }
    );
  }, [refreshToken]);

  return { accessToken, refreshToken, refresh };
};

export default useAuth;