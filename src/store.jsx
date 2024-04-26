import { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";
//step 1: create context
const GlobalContext = createContext();

// step 2: create provider
export const GlobalProvider = ({children}) => {
  const [name, setName] = useState("David");
  const [age, setAge] = useState(35);
  return <GlobalContext.Provider
  value={{
    name,
    setName,
    age,
    setAge
  }}
  >
    {children}
  </GlobalContext.Provider>
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export const useGlobalContext = () => useContext(GlobalContext);
