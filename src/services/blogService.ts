/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const getBlogs = (params: any): any => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/wp-json/wp/v2/posts`,
    { params: params }
  );
};

export const getBlog = (id: any): any => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/wp-json/wp/v2/posts/${id}`
  );
};

export const getBlogMedia = (media_id: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/wp-json/wp/v2/media/${media_id}`
  );
};
