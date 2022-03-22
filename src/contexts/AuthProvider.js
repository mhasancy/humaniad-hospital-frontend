//imported file
import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useDataContext from "./useDataContext";
//Context Creation
export const AllContext = createContext();

//auth provider
const AuthProvider = ({ children }) => {
  const firebaseContext = useFirebase();
  const dataContext = useDataContext();
  return (
    <AllContext.Provider value={{ firebaseContext, dataContext }}>
      {children}
    </AllContext.Provider>
  );
};

export default AuthProvider;
