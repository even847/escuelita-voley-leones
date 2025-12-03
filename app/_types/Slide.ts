export type SlideType = "Torneo" | "Entrenamiento" | "Amistoso";

export interface Slide {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  date?: string;
  category?: string;
  location?: string;
  image: string;
}
