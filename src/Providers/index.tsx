"use client";
import store from "@/store";
import React from "react";
import { Provider } from "react-redux";
import { ModalProvider } from "./ModalContext";
import Progressbar from "./Progressbar";

const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Progressbar>
      <ModalProvider>
        <Provider store={store}>{children}</Provider>
      </ModalProvider>
    </Progressbar>
  );
};

export default CommonProvider;
