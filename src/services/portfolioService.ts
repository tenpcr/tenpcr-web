/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const getPortfolios = (params: any): any => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/wp-json/wp/v2/portfolio`,
    { params: params }
  );
};

export const getPortfolio = (id: any): any => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/wp-json/wp/v2/portfolio/${id}`
  );
};

export const getBlogMedia = (media_id: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/wp-json/wp/v2/media/${media_id}`
  );
};

export const getPortfolioCategoryBySlug = (slug: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/wp-json/wp/v2/portfolio-categories`,
    {
      params: {
        slug,
      },
    }
  );
};