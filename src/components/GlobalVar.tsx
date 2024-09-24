import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface GlobalContextType {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

// Create a Context for global variables
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useState<string>("Some value");

  return (
    <GlobalContext.Provider
      value={{
        collapsed,
        setCollapsed,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the Global Context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
