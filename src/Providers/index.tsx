"use client";
import store from "@/store";
import React from "react";
import { Provider } from "react-redux";
import { ModalProvider } from "./ModalContext";
import Progressbar from "./Progressbar";
import ReactQueryProvider from "./ReactQueryClient";

const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Progressbar>
      <ModalProvider>
        <ReactQueryProvider>
          <Provider store={store}>{children}</Provider>
        </ReactQueryProvider>
      </ModalProvider>
    </Progressbar>
  );
};

export default CommonProvider;
