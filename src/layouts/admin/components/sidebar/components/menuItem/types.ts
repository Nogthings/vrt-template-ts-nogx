import React from "react";

interface MenuItemProps {
  children?: React.ReactNode;
  title: string;
  color?: string;
  variant?: string;
  iconOnly?: boolean;
  style?: React.CSSProperties;
  active?: boolean;
  to: string;
}

export default MenuItemProps;
