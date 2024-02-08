import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.Provider value={{ activeMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

// Node Context

const NodeContext = createContext();
export const NodeContextProvider = ({ children }) => {
  const parameters = {
    meterVoltage: 230,
    meterCurrent: 15,
  };
  return (
    <NodeContext.Provider value={{ ...parameters }}>
      {children}
    </NodeContext.Provider>
  );
};

export const useNodeContext = () => useContext(NodeContext);
