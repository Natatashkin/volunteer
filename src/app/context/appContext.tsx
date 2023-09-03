"use client";
import { INavigationItem } from "@/types";
import QueryString from "qs";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";

export type TDefaultContextData = {
  navData: INavigationItem[];
};

const defaultValues: TDefaultContextData = {
  navData: [],
};

const AppContext = createContext(defaultValues);

export const useAppContext = () => useContext(AppContext);

export interface IAPPContextProvider {
  children: ReactNode;
  value: INavigationItem[];
}

export const AppContextProvider = ({
  children,
  value,
}: IAPPContextProvider) => {
  return (
    <AppContext.Provider value={{ navData: value }}>
      {children}
    </AppContext.Provider>
  );
};
