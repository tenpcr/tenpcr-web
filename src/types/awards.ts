import { ImageType } from "@/types/images"

export interface AwardsType {
  name: string;
  period: string;
  detail: string;
  images?: ImageType[]
}
