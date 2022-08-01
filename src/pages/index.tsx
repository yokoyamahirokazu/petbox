import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Items from "@/components/Items";
import NewsIndex from "@/components/NewsIndex";
import styles from "../styles/Home.module.css";
import type { BaaeItems, ICategory, IBlog } from "@/types";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
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
        <title>PETBOX</title>
        <meta name="description" content="PETBOX" />
      </Head>
      {/* <InstagramFeed
        token="EAAIH8bSNc70BAHWQ1PV84Grhgf67YZATqWHmd2daAVUhlyw82NzyE82dz6O5mfKzlH1bh5u0rskQeNKVTCssp75xKRN3g7c0BvvQ9kZC0ACQD7tftkZCwkzQ3rLjmZBZCQ5E5UeQbaCofFJFccRQEFox97O6hCRJk9hx77v5LUUuAGV0GLjni"
        counter="6"
      /> */}
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
