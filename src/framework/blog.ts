import { config } from "site.config";
import { IBlog, ICategory, MicroCmsResponse, Queries } from "@/types";
import { client } from "@/framework/client";

const limit = parseInt(config.defaultLimit);

export const getContents = async (
  currentPage: number = 1,
  articleFilter?: string
): Promise<{
  blogs: IBlog[];
  categories: ICategory[];
  pager: number[];
}> => {
  const [{ blogs, pager }, categories] = await Promise.all([
    getBlogsByFilter(limit, currentPage, articleFilter),
    getCategories(),
  ]);
  return {
    blogs: blogs.contents,
    categories: categories.contents,
    pager,
  };
};

export const getAllBlogs = async (): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: "news",
    queries: { limit: config.defaultMaxLimit },
  });
  return res;
};

export const getBlogs = async (
  limit: number
): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: "news",
    queries: { limit: limit },
  });

  return res;
};

export const getLatestBlogs = async (
  limit: number
): Promise<MicroCmsResponse<IBlog>> => {
  const res = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: "news",
    queries: { limit: limit },
  });

  return res;
};

export const getBlogsByFilter = async (
  limit: number,
  currentPage: number,
  articleFilter?: string
): Promise<{
  blogs: MicroCmsResponse<IBlog>;
  pager: number[];
}> => {
  const queries: Queries = {
    limit: limit,
    filters: articleFilter,
    offset: (currentPage - 1) * limit,
  };
  const blogs = await client.get<MicroCmsResponse<IBlog>>({
    endpoint: "news",
    queries: queries,
  });
  // const pager = [...Array(Math.ceil(blogs.totalCount / 12)).keys()];
  const pager = Array.from(new Array(Math.ceil(blogs.totalCount / 12))).map(
    (v, i) => i
  );
  return { blogs, pager };
};

export const getBlogById = async (blogId: string): Promise<IBlog> => {
  const res = await client.get<IBlog>({
    endpoint: "news",
    contentId: blogId,
    queries: { depth: 2 },
  });
  return res;
};

export const getCategories = async (): Promise<MicroCmsResponse<ICategory>> => {
  const res = await client.get<MicroCmsResponse<ICategory>>({
    endpoint: "category",
  });
  return res;
};
