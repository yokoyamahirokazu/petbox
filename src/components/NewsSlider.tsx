import React from "react";

import styles from "@/styles/Style.module.css";
import { IBlog, ICategory } from "@/types";
import PostCard from "@/components/PostCard";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

type NewsProps = {
  blogs: IBlog[];
  categories?: ICategory[];
  classNames?: string;
};

const NewsSlider: React.FC<NewsProps> = (props) => {
  return (
    <section>
      <div className={styles.newsSlider}>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
            },

            920: {
              slidesPerView: 1.3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          centeredSlides
        >
          {props.blogs.map((newsItem) => {
            return (
              <SwiperSlide key={newsItem.id}>
                <PostCard newsItem={newsItem} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default NewsSlider;
