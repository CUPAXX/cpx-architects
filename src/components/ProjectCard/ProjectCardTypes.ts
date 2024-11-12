export interface MiniProjectDataTypes {
  projectName: string;
  image: string;
  imageLabel: string;
  id: number;
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
  projectData: ProjectDataTypes;
}

export interface MiniProjectCardTypes {
  containerStyle?: string;
  projectNameStyle?: string;
  overlayStyle?: string;
  projectData: MiniProjectDataTypes;
}
