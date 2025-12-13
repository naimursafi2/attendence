import React from "react";

const baseStyles =
  "inline-flex items-center cursor-pointer justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-gray-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400 disabled:opacity-50",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button =({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}) => {
  const styles = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? "cursor-not-allowed opacity-70" : ""}
    ${className}
  `;

  return (
    <button className={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
