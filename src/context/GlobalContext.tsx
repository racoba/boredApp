import React, { createContext, useContext, useState } from "react";
import { useLocalObservable } from "mobx-react-lite";
import AuthStore from "@/stores/AuthStore";

interface IGlobalStore {
  authStore: AuthStore;
}

const GlobalStoreContext = React.createContext<IGlobalStore | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const authStore = useLocalObservable(() => new AuthStore());

  return (
    <GlobalStoreContext.Provider value={{ authStore }}>
      {children}
    </GlobalStoreContext.Provider>
  );
}

export const useGlobalStore = () => {
  const store = React.useContext(GlobalStoreContext);
  if (!store) {
      throw new Error("Cannot Access Store outside it's context");
  }
  return store;
};
