export type BaaeItems = {
  item_id: string;
  title: string;
  detail: string;
  price: number;
  img1_640: string;
  img2_640: string;
  img3_640: string;
  img4_640: string;
  img5_640: string;
  modified: number;
};

import {
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
} from "microcms-js-sdk";

export type Queries = MicroCMSQueries;

export type TocTypes = {
  text: string;
  id: string;
  name: string;
};

export interface IBlog extends ContentBase {
  title?: string;
  category?: ICategory;
  body?: string;
  og_image?: IMicroCmsImageType;
  description?: string;
  publishedAt?: string;
}

export interface ICategory extends ContentBase {
  category?: string;
}

export type MicroCmsResponse<T> = MicroCMSListResponse<T>;

export type ContentBase = MicroCMSListContent;

export interface IMicroCmsImageType {
  url?: string;
  height?: number;
  width?: number;
}

export interface IDraftResponse {
  blog: IBlog;
  toc: TocTypes[];
  body: string;
}

export type Response<T = any> = {
  data: T;
  headers: any;
};

export interface IHttpClient {
  get: <T extends object, R = Response<T>>(path: string) => Promise<R>;
}
