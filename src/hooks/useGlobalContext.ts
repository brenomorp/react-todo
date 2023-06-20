import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("outside context scope");
  }

  return context;
};

export default useGlobalContext;
