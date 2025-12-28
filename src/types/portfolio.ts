export interface portfolioTypes {
  name: string;
  client?: string;
  detail?: string;
  thumbnail?: string;
  tools?: string[];
  button?: { label: string; url: string }[];
  images?: { detail: string; src: string }[];
  category: string[];
  type?: string;
  youtube?: string;
}
