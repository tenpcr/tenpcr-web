/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "./httpClient";

export const getBlogList = (params: any) => {
  return httpClient.get("/wp-json/wp/v2/posts", { params: params });
};

export const getBlogMedia = (media_id: string) => {
  return httpClient.get(`/wp-json/wp/v2/media/${media_id}`);
}