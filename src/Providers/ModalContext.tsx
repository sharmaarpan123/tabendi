"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ReactNode[]>([]);

  const openModal = (content: ReactNode) =>
    setModals((prev) => [...prev, content]);

  const closeModal = () => setModals((prev) => prev.slice(0, -1)); // remove last (top) modal

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modals.map((modal, index) =>
        createPortal(
          <div
            key={index}
            className="fixed inset-0 z-[1000] flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-black/50"
              // Only top modal should close on backdrop
              onClick={index === modals.length - 1 ? closeModal : undefined}
            />
            <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-md w-full">
              {modal}
            </div>
          </div>,
          document.body
        )
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};
