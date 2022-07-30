import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import type { BaaeItems } from "@/types";
import Moment from "react-moment";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

type Props = {
  ItemData: BaaeItems[];
};

SwiperCore.use([Pagination, Navigation]);

const Home: NextPage<Props> = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PETBOX</title>
        <meta name="description" content="PETBOX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {props.ItemData.map((item) => {
            const modifiedDate = new Date(item.modified * 1000);

            return (
              <li key={item.item_id}>
                {item.title}
                {item.price}

                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  navigation
                  loop={true}
                >
                  {item.img1_640 && (
                    <SwiperSlide>
                      <Image
                        src={item.img1_640}
                        alt={item.title}
                        width={"640"}
                        height={"640"}
                        layout="responsive"
                      />
                    </SwiperSlide>
                  )}
                  {item.img2_640 && (
                    <SwiperSlide>
                      <Image
                        src={item.img2_640}
                        alt={item.title}
                        width={"640"}
                        height={"640"}
                        layout="responsive"
                      />
                    </SwiperSlide>
                  )}
                  {item.img3_640 && (
                    <SwiperSlide>
                      <Image
                        src={item.img3_640}
                        alt={item.title}
                        width={"640"}
                        height={"640"}
                        layout="responsive"
                      />
                    </SwiperSlide>
                  )}
                  {item.img4_640 && (
                    <SwiperSlide>
                      <Image
                        src={item.img4_640}
                        alt={item.title}
                        width={"640"}
                        height={"640"}
                        layout="responsive"
                      />
                    </SwiperSlide>
                  )}
                  {item.img5_640 && (
                    <SwiperSlide>
                      <Image
                        src={item.img5_640}
                        alt={item.title}
                        width={"640"}
                        height={"640"}
                        layout="responsive"
                      />
                    </SwiperSlide>
                  )}
                </Swiper>

                <Moment format="YYYY/MM/DD">{modifiedDate}</Moment>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
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
