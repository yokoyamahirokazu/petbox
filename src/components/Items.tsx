import Link from "next/link";
import type { BaaeItems } from "@/types";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import styles from "@/styles/Style.module.css";

type Props = {
  ItemData?: BaaeItems[];
};

SwiperCore.use([Pagination, Navigation]);

const Items: React.FC<Props> = (props) => {
  return (
    <section>
      <div className={styles.itemList_inner}>
        <h2 className={styles.headlineCenter}>NEW PRODUCTS</h2>
        <ul className={styles.itemList}>
          {props.ItemData &&
            props.ItemData.map((item) => {
              return (
                <li key={item.item_id}>
                  <Link
                    href={`https://petbox1976.official.ec/items/${item.item_id}`}
                  >
                    <a target="_blank">
                      <div className={styles.SwipeBox}>
                        <Swiper
                          slidesPerView={1}
                          pagination={{
                            clickable: true,
                          }}
                          loop={true}
                        >
                          {item.img1_640 && (
                            <SwiperSlide>
                              <div className={styles.itemImg}>
                                <Image
                                  src={item.img1_640}
                                  alt={item.title}
                                  objectFit="cover"
                                  layout="fill"
                                />
                              </div>
                            </SwiperSlide>
                          )}
                          {item.img2_640 && (
                            <SwiperSlide>
                              <div className={styles.itemImg}>
                                <Image
                                  src={item.img2_640}
                                  alt={item.title}
                                  objectFit="cover"
                                  layout="fill"
                                />
                              </div>
                            </SwiperSlide>
                          )}
                          {item.img3_640 && (
                            <SwiperSlide>
                              <div className={styles.itemImg}>
                                <Image
                                  src={item.img3_640}
                                  alt={item.title}
                                  objectFit="cover"
                                  layout="fill"
                                />
                              </div>
                            </SwiperSlide>
                          )}
                          {item.img4_640 && (
                            <SwiperSlide>
                              <div className={styles.itemImg}>
                                <Image
                                  src={item.img4_640}
                                  alt={item.title}
                                  objectFit="cover"
                                  layout="fill"
                                />
                              </div>
                            </SwiperSlide>
                          )}
                          {item.img5_640 && (
                            <SwiperSlide>
                              <div className={styles.itemImg}>
                                <Image
                                  src={item.img5_640}
                                  alt={item.title}
                                  objectFit="cover"
                                  layout="fill"
                                />
                              </div>
                            </SwiperSlide>
                          )}
                        </Swiper>
                      </div>
                      <h3 className={styles.itemName}>{item.title}</h3>
                      <p className={styles.itemPrice}>
                        ¥{item.price.toLocaleString()}
                        <span>（税込）</span>
                      </p>
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
export default Items;
