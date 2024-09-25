/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface ModalTypes {
  show: boolean;
  onClose: () => void;
  onPressButton: () => void;
  mainContent: ReactNode;
  mainContentStyle?: string;
  btnLabel: string;
}
