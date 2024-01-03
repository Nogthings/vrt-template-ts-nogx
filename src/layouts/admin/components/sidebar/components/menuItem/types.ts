import React from "react";

interface MenuItemProps {
  children?: React.ReactNode;
  title: string;
  color?: string;
  variant?: string;
  iconOnly?: boolean;
  style?: React.CSSProperties;
  to: string;
}

export default MenuItemProps;
