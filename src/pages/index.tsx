import { NextPage } from "next";
import Head from "next/head";
import Items from "@/components/Items";
import NewsIndex from "@/components/NewsIndex";
import type { BaaeItems, ICategory, IBlog } from "@/types";
import { client } from "@/framework/client";

type Props = {
  ItemData: BaaeItems[];
  blogs: IBlog[];
  categories: ICategory[];
};

const Home: NextPage<Props> = (props: any) => {
  return (
    <>
      <Head>
        <title>PETBOX Since 1976</title>
        <meta name="description" content="PETBOX" />
      </Head>

      <NewsIndex blogs={props.blogs} categories={props.categories} />

      <Items ItemData={props.ItemData} />
    </>
  );
};
export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://sidecreative.xsrv.jp/petbox1976/itemdata.json"
  );
  const ItemRaw = await res.json();

  const blogData = await client.get({
    endpoint: "news",
    queries: { limit: 6 },
  });

  const categoryData = await client.get({ endpoint: "category" });

  return {
    props: {
      ItemData: ItemRaw.items,
      blogs: blogData.contents,
      categories: categoryData.contents,
    },
  };
};
