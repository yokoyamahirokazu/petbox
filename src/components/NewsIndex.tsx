import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "@/styles/Style.module.css";
import { IBlog, ICategory } from "@/types";
import { format } from "date-fns";
import Categories from "@/components/Categories";
type NewsProps = {
  blogs: IBlog[];
  categories?: ICategory[];
  classNames?: string;
};

const NewsIndex: React.FC<NewsProps> = (props) => {
  return (
    <section>
      <div className={styles.section_inner}>
        <div className={styles.headlineBox}>
          <h2 className={styles.headlineCenter}>NEWS RELEASE</h2>
          <Categories categories={props.categories} />
        </div>
        <ul className={styles.newsList}>
          {props.blogs.map((newsItem) => {
            return (
              <li
                key={newsItem.id}
                className={`${(() => {
                  if (newsItem.category.category === "NEWS") {
                    return styles.catNews;
                  }
                  if (newsItem.category.category === "DIARY") {
                    return styles.catDiary;
                  }
                  if (newsItem.category.category === "EVENT") {
                    return styles.catEvent;
                  } else {
                    return "";
                  }
                })()}`}
              >
                <Link href="/news/[blogId]" as={`/news/${newsItem.id}`}>
                  <a>
                    {newsItem.og_image ? (
                      <div className={styles.newsImage}>
                        <Image
                          src={`${newsItem.og_image.url}?w=670`}
                          alt={newsItem.title}
                          layout={"fill"}
                          objectFit={"cover"}
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className={styles.newsTxt}>
                      <p className={styles.newsCategoryName}>
                        {newsItem.category.category}
                      </p>

                      <h3 className={styles.newsTitle}>{newsItem.title}</h3>
                    </div>
                    <p className={styles.newsDate}>
                      <span>
                        {format(new Date(newsItem.publishedAt), "dd")}
                      </span>
                      {format(new Date(newsItem.publishedAt), "MMM.yyyy")}
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
export default NewsIndex;
