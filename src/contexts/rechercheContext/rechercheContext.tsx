import React, { FC, useState } from "react";

interface RechercheContextInterface {
  id: number;
  setId: (id: number) => void;
  type: string;
  setType: (type: string) => void;
}

export const RechercheContext =
  React.createContext<RechercheContextInterface | null>(null);

const RechercheContextProvider: FC = ({ children }) => {
  const [id, setId] = useState<number>(-1);
  const [type, setType] = useState<string>("");

  return (
    <RechercheContext.Provider value={{ id, type, setId, setType }}>
      {children}
    </RechercheContext.Provider>
  );
};

export default RechercheContextProvider;
