import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  title: string;
  color?: string;
  onClick?: () => void;
}

export default ButtonProps;
