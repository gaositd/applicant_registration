import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type User = {
  nombre: string;
  matricula: string;
  role: string;
};

export const SessionContext = createContext<
  [User | undefined, Dispatch<SetStateAction<User | undefined>>]
>([undefined, () => {}]);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>();

  return (
    <SessionContext.Provider value={[user, setUser]}>
      {children}
    </SessionContext.Provider>
  );
};
