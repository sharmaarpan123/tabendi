import React from "react";
import { motion } from "framer-motion";

export interface ThemeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
  isArrowIcon?: boolean;
}

// Reusable arrow icon component
const ArrowIcon = ({ color = "white" }: { color?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
      fill={color}
    />
  </svg>
);

export default function ThemeButton({
  variant = "primary",
  size = "md",
  icon,
  isArrowIcon = false,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ThemeButtonProps) {
  console.log(isArrowIcon , variant , "debug");
  const baseStyles =
    "flex items-center justify-center gap-2 font-medium transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-[#E05A00] active:bg-[#D04D00]",
    secondary:
      "bg-white text-primary border border-primary hover:bg-[#FFFBF6] active:bg-[#FFF5E6]",
    outline:
      "bg-transparent text-[#4A4A4A] border border-[#E0E0E0] hover:bg-[#FFFBF6] hover:border-primary hover:text-primary active:bg-[#FFF5E6]",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

  const defaultIcon = icon ? (
    icon
  ) : isArrowIcon ? (
    <ArrowIcon color={variant === "primary" ? "white" : "var(--primary)"} />
  ) : null;


  const iconElement = defaultIcon ? (
    <motion.span
      className="shrink-0"
      animate={{
        x: [0, 3, 0, -3, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {defaultIcon}
    </motion.span>
  ) : icon ? (
    <span className="shrink-0">{icon}</span>
  ) : null;

  return (
    <button className={combinedClassName} {...props}>
      {defaultIcon && iconPosition === "left" && iconElement}
      <span>{children}</span>
      {defaultIcon && iconPosition === "right" && iconElement}
    </button>
  );
}

// Export the ArrowIcon for use elsewhere if needed
export { ArrowIcon };
