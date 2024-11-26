export interface NavItemType {
  isActive: boolean;
  label: string;
  onPress: () => void;
  show?: boolean;
  even?: boolean;
}
