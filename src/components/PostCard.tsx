import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/Style.module.css";
import { FiMail } from "react-icons/fi";
import { IBlog } from "@/types";
import { format } from "date-fns";

interface Props {
  newsItem?: IBlog;
}

const PostCard: React.FC<Props> = (props) => {
  return (
    <Link href="/news/[blogId]" as={`/news/${props.newsItem.id}`}>
      <a
        className={`${(() => {
          if (props.newsItem.category.category === "NEWS") {
            return `${styles.newsListCard} ${styles.catNews}`;
          }
          if (props.newsItem.category.category === "DIARY") {
            return `${styles.newsListCard} ${styles.catDiary}`;
          }
          if (props.newsItem.category.category === "EVENT") {
            return `${styles.newsListCard} ${styles.catEvent}`;
          } else {
            return "";
          }
        })()}`}
      >
        {props.newsItem.og_image ? (
          <div className={styles.newsImage}>
            <Image
              src={`${props.newsItem.og_image.url}?w=670`}
              alt={props.newsItem.title}
              layout={"fill"}
              objectFit={"cover"}
            />
          </div>
        ) : (
          <div></div>
        )}
        <div className={styles.newsTxt}>
          <p className={styles.newsCategoryName}>
            {props.newsItem.category.category}
          </p>

          <h3 className={styles.newsTitle}>{props.newsItem.title}</h3>
        </div>
        <p className={styles.newsDate}>
          <span>{format(new Date(props.newsItem.publishedAt), "dd")}</span>
          {format(new Date(props.newsItem.publishedAt), "MMM.yyyy")}
        </p>
      </a>
    </Link>
  );
};

export default PostCard;
