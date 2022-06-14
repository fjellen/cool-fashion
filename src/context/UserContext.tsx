import React, { createContext, ReactNode, useState } from "react";

export type userCredentials = {
  jwt: string;
  id: number;
  username: string;
  email: string;
};

type userContextType = {
  registeredUser: userCredentials | null;
  setRegisterUser: React.Dispatch<React.SetStateAction<userCredentials | null>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<any>>;
  loggedInUser: userCredentials | null;
  setLoggedInUser: React.Dispatch<React.SetStateAction<userCredentials | null>>;
};

type userProviderProps = {
  children: ReactNode;
};

export const userContext = createContext<userContextType | null>(null);

export const UserProvider = ({ children }: userProviderProps) => {
  const [registeredUser, setRegisterUser] = useState<userCredentials | null>(
    null
  );
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] = useState<userCredentials | null>(
    null
  );
  return (
    <userContext.Provider
      value={{
        registeredUser,
        setRegisterUser,
        loggedIn,
        setLoggedIn,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
