import React from "react";

interface LinkProps {
  children?: React.ReactNode;
  title: string;
  color?: string;
  variant?: string;
  to: string;
  iconOnly?: boolean;
}

export default LinkProps;
