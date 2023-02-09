import { createContext, ReactNode, useState } from "react";

export type User = {
  nombre: string;
  matricula: string;
  rol: string;
};

type SessionContextType = {
  user: User | undefined;
  login?: (user: User) => void;
  logout?: () => void;
};

export const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();

  const handleLogin = (user: User) => setUser(user);

  const handleLogout = () => setUser(undefined);

  return (
    <SessionContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </SessionContext.Provider>
  );
};
