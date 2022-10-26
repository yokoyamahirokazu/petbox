import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/framework/client";

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const draftKey = req.query.draftKey;
  const slug = req.query.slug;
  console.log(slug);

  if (typeof draftKey !== "string" || typeof slug !== "string") {
    res.status(404).end();
    return;
  }

  // 記事が存在するか確かめる
  const content = await client
    .get({
      endpoint: "news",
      contentId: slug,
      queries: { draftKey: draftKey },
    })
    .then()
    .catch((error) => console.error(error));

  // 記事が返ってこない場合は401エラーを表示する
  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // 記事のIDとdraftKeyを渡して本来のパスにリダイレクトする
  res.setPreviewData({
    slug: slug,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/news/draft/` });
  res.end("Preview mode enabled");
};

export default preview;
