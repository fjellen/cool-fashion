import { createContext, ReactNode, useState } from "react";

export type userCredentials = {
  id: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
};

type userContextType = {
  user: userCredentials | null;
  setRegisterUser: React.Dispatch<React.SetStateAction<userCredentials | null>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<any>>;
};

type userProviderProps = {
  children: ReactNode;
};

export const userContext = createContext<userContextType | null>(null);

export const UserProvider = ({ children }: userProviderProps) => {
  const [user, setRegisterUser] = useState<userCredentials | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <userContext.Provider
      value={{ user, setRegisterUser, loggedIn, setLoggedIn }}
    >
      {children}
    </userContext.Provider>
  );
};
