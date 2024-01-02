import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  title: string;
  color?: string;
  variant?: string;
  iconOnly?: boolean;
  style?: React.CSSProperties;
  rounded?: boolean;
  onClick?: () => void;
}

export default ButtonProps;
