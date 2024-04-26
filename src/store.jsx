import { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext({
  name: "",
  setName: (name) => name,
});

export const GlobalProvider = ({ children }) => {
  const [name, setName] = useState("David");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export const useGlobalContext = () => useContext(GlobalContext);
