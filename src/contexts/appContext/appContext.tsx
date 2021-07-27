import React, { FC } from "react";

interface AppContextInterface {}

export const AppContext = React.createContext<AppContextInterface | null>(null);

const AppContextProvider: FC = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
