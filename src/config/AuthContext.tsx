import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {commonAuthService} from "@/services/http";

export interface AuthContextProps {
  token?: string | null;
  setToken: (idToken?: string | null) => void;
  isAuthenticated: boolean;
}

export interface AuthContextProviderProps {
  token?: string | null;
  children: ReactNode;
}

const isTokenExpired = (token?: string | null)=>  {
  if (!token) {
    return true;
  }

  const payload = JSON.parse(atob(token.split('.')[1]));
  const exp = payload.exp;
  const currentTime = Math.floor(Date.now() / 1000);
  return exp < currentTime;
}

export const AuthContext = createContext<AuthContextProps>({
  token: typeof localStorage === 'undefined' ? undefined : localStorage.getItem("token"),
  setToken: () => ({}),
  isAuthenticated: !isTokenExpired(typeof localStorage === 'undefined' ? undefined : localStorage.getItem("token")),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (
  {
    children,
  }: AuthContextProviderProps
) => {
  const [idToken, setIdToken] = useState<string | null | undefined>(localStorage.getItem("token"));
  const [timeoutId, setTimeoutId] = useState<number>();

  const setToken = (value?: string | null) => {
    if (value) {
      localStorage.setItem("token", value);
    } else {
      localStorage.removeItem("token");
    }
    setIdToken(value);
  }

  const refreshToken = async () => {
    const response = await commonAuthService.loginAuth();
    setToken(response.data.token);
  }

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (idToken) {
      setTimeoutId(
        setTimeout(
          () => {
            refreshToken();
          },
          1000*60*25
        ) as any
      );
    }
  }, [idToken]);

  return (
    <AuthContext.Provider value={{token: idToken, setToken, isAuthenticated: !isTokenExpired(idToken)}}>
      {children}
    </AuthContext.Provider>
  );
};