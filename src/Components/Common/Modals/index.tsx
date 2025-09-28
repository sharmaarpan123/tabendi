import ThemeButton from "@/Components/ui/Button/ThemeButton";
import React, { MouseEventHandler } from "react";

export enum ModalType {
  FORGET_EMAIL_SEND_SUCCESS = "FORGET_EMAIL_SEND_SUCCESS",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
}

function replacePlaceholders(
  str: string,
  obj: { [key: string]: string } | undefined
) {
  if (!obj) return str;
  return str.replace(/{{(.*?)}}/g, (_, key) => {
    return key in obj ? obj[key] : `{{${key}}}`;
  });
}

export type ModalContent = {
  title: string;
  description: (variables?: Record<string, string>) => string;
  icon?: React.ReactNode;
};

const modalContent: { [key: string]: ModalContent } = {
  [ModalType.FORGET_EMAIL_SEND_SUCCESS]: {
    title: "Check your email",
    description: (variables: { [key: string]: string } | undefined = {}) =>
      replacePlaceholders(
        "You’re almost there! We sent an email to {{email}} with a link to activate your account. Please check your email and click the activation link.",
        variables
      ),
  },
  [ModalType.SIGNUP_SUCCESS]: {
    title: "Welcome to Tabendi!",
    description: (variables = {}) =>
      replacePlaceholders(
        "You are ready to explore doctors, book appointments, and take care of your health with ease.",
        variables
      ),
  },
};

const CommonModal = ({
  type,
  variables,
  action,
}: {
  type: ModalType;
  variables?: { [key: string]: string } | undefined;
  action: { action: MouseEventHandler<HTMLButtonElement>; actionText: string };
}) => {
  return (
    <div>
      {modalContent[type]?.icon && <div>{modalContent[type]?.icon}</div>}
      <h1 className="my-4 text-center font-bold">
        {modalContent[type]?.title}
      </h1>
      <p className="my-4 text-center text-gray-800">
        {modalContent[type]?.description(variables)}
      </p>
      {action && (
        <ThemeButton onClick={action.action} variant="primary">
          {action.actionText}
        </ThemeButton>
      )}
    </div>
  );
};

export default CommonModal;
