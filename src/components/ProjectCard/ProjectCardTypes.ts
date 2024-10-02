export interface MiniProjectCardTypes {
  projectName: string;
  image: string;
  containerStyle?: string;
  overlayStyle?: string;
  imageLabel: string;
  projectNameStyle?: string;
}

export interface ProjectDataTypes {
  id: number;
  projectName: string;
  image: string;
  imageLabel: string;
  image2: string;
  imageLabel2: string;
  image3: string;
  imageLabel3: string;
  description: string;
}

export interface ProjectCardTypes {
  onPress: () => void;
  projectData: ProjectDataTypes;
}
