import { useContext } from "react";
import { AppContext } from "../../contexts/appContext/appContext";

const useAppContext = () => {
  const context = useContext(AppContext);
  if (null === context) {
    throw new Error("Provider AppContext non déclarer");
  }
  return context;
};

export default useAppContext;
