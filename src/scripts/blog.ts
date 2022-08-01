import axios from "axios";
import { config } from "site.config";
import { IBlog, MicroCmsResponse } from "@/types";

const apiRoot: string = `https://${process.env.SERVICE_ID}.microcms.io/api/v1`;

// microcms-js-sdkを使うと例外がはかれるため暫定対応
export const getAllBlogs = async (): Promise<MicroCmsResponse<IBlog>> => {
  const res = await axios.get(
    `${apiRoot}/blog?limit=${config.defaultMaxLimit}`,
    {
      headers: { "X-API-KEY": process.env.MICROCMS_APIKEY },
    }
  );
  return res.data;
};
