import React from "react";

const Button = ({ text, onClick, variant }) => {
  const buttonStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md",
    danger: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md",
    success: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md",
  };

  return (
    <button
      className={buttonStyles[variant] || buttonStyles.primary}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;