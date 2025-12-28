/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ArticleTypes {
  _id: string;
  id: string;
  title: string;
  url: string;
  slug: string;
  thumbnail: string;
}

export interface ArticleItemTypes {
  _id: string;
  id: string;
  title: string;
  url: string;
  slug: string;
  thumbnail: string;
  yoast_head_json?: any;
}
