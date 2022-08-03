import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "@/styles/Style.module.css";
import { IBlog, ICategory } from "@/types";
import { format } from "date-fns";
import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import Button from "@/components/Button";

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
              <li key={newsItem.id}>
                <PostCard newsItem={newsItem} />
              </li>
            );
          })}
        </ul>
        <div className={styles.buttonBoxCenter}>
          <Button href="/news/page/[id]" as="/news/page/1">
            VIEW MORE
          </Button>
        </div>
      </div>
    </section>
  );
};
export default NewsIndex;
