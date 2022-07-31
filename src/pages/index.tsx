import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Items from "@/components/Items";
import styles from "../styles/Home.module.css";
import type { BaaeItems } from "@/types";

type Props = {
  ItemData: BaaeItems[];
};

const Home: NextPage<Props> = (props: any) => {
  return (
    <>
      <Head>
        <title>PETBOX</title>
        <meta name="description" content="PETBOX" />
      </Head>
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

  return {
    props: { ItemData: ItemRaw.items },
  };
};
