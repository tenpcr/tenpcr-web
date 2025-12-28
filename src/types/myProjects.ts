import { ImageType } from "@/types/images";

export interface MyProjectTypes {
  name: string;
  detail?: string;
  images: ImageType[];
  url?: string;
}
