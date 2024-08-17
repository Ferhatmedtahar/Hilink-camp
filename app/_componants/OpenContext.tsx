"use client";
import { createContext, useContext, useState } from "react";
type providerProps = {
  children: React.ReactNode;
};

type OpenContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialState = false;
const OpenContext = createContext<OpenContextType>({
  isOpen: initialState,
  setIsOpen: () => {},
});

export default function OpenContextProvider({ children }: providerProps) {
  const [isOpen, setIsOpen] = useState(initialState);
  return (
    <OpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenContext.Provider>
  );
}

export function useOpen() {
  const context = useContext(OpenContext);
  if (context === undefined) throw new Error("useOpen used out of the context");
  return context;
}
