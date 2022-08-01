export const config = {
  siteMeta: {
    title:
      "遠隔接客サービス RURA｜まるで瞬間移動。 高スキルのスタッフを全国に０秒派遣。 お店の無人化や人材不足に効果を発揮。",
    description:
      "時給450円から店舗スタッフを採用可能遠隔接客サービス RURA※特許出願中。RURAはロボットやバーチャルキャラクター越しに接客を行なうシステムで、全国各地にいるRURAワーカーが、WEB経由で店舗の接客。一人のスタッフが複数店舗をまたいで接客が可能",
  },
  baseUrl:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASEURL
      : "http://localhost:3000",
  apiKey: process.env.MICROCMS_APIKEY,
  serviceId: process.env.SERVICE_ID,
  gtmId: process.env.GTM_ID,
  headerLinks: [],
  defaultLimit: process.env.NEXT_PUBLIC_DEFAULT_LIMIT ?? "12",
  defaultMaxLimit: 50,
};
