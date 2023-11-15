import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState('5');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
