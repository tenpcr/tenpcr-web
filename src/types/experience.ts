import { ImageType } from "@/types/images"

export interface ExperienceType {
  detail?: string;
  period: string;
  position: string;
  company: string;
  images?: ImageType[];
}