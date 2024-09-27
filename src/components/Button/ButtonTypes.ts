export interface ButtonTypes {
  label: string;
  showArrow?: boolean;
  type?: "black" | "white";
  onPress: () => void;
  containerStyle?: string;
}
