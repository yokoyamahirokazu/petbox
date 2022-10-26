import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { IBlog } from "@/types";
import { config } from "site.config";

export default async function getDraft(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const id = req.query.id;
  const draftKey = req.query.draftKey;

  if (!id || !draftKey) {
    res.status(400).json({ error: `missing queryparamaeter` });
  }

  return axios
    .get<IBlog>(
      `https://${config.serviceId}.microcms.io/api/v1/news/${id}?draftKey=${draftKey}&depth=2`,
      {
        headers: { "X-API-KEY": config.apiKey },
      }
    )
    .then(({ data }) => {
      res.status(200).json({ blog: data });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}
