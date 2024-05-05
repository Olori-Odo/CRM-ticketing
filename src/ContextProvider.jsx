import { createContext, useState } from "react";

export const MyContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState({});

  return (
    <MyContext.Provider value={{ category, setCategory }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
