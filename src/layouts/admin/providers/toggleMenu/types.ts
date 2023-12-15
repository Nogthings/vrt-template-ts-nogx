export interface IMenuCollapsedProps {
  menuCollapsed: boolean;
}

export type MenuCollapsedType = {
  menuCollapsed: boolean;
  handleMenuToggle: (menuCollapsed: boolean) => void;
};
