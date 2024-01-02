export interface IShowAlertProps {
  showAlert: boolean;
  message: string;
  type: string;
}

export type ShowAlertType = {
  showAlert: boolean;
  message: string;
  type: string;
  handleShowAlert: (showAlert: boolean) => void;
};
