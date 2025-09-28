import React, { MouseEventHandler } from "react";

interface ThemeButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loader?: boolean;
  disable?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  loaderText?: string;
  classNames?: string;
}

const ThemeButtonType: { [key: string]: string } = {
  primary: "bg-primary text-white py-2 px-2 rounded-lg hover:bg-primary-hover",
};

const ThemeButton = ({
  onClick,
  loader,
  disable,
  type = "button",
  children,
  variant = "primary",
  loaderText = "Loading...",
  classNames,
}: ThemeButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loader || disable}
      type={type}
      className={`w-full  transition-colors cursor-pointer ${ThemeButtonType[variant]} ${classNames}`}
    >
      {loader ? loaderText : children}
    </button>
  );
};

export default ThemeButton;
