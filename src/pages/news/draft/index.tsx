import { NextPage } from "next";

import { Share } from "@/components/Share";
import styles from "@/styles/Style.module.css";
import Image from "next/image";
import { format } from "date-fns";
import PostContact from "@/components/PostContact";
import { useDraft } from "@/hooks/useDraft";

const Draft: NextPage = () => {
  const { data, isLoading } = useDraft();
  if (isLoading || !data) {
    return;
  }

  console.log(data.blog);

  return (
    <div className={styles.postFlex}>
      <div className={styles.postFlexLeft}>
        <div className={styles.postWrapper}>
          <div className={styles.postTitleFlex}>
            <p className={styles.postDate}>
              <span>{format(new Date(data.blog.publishedAt), "dd")}</span>
              {format(new Date(data.blog.publishedAt), "MMM.yyyy")}
            </p>
            <div className={styles.postTitleBox}>
              <p className={styles.postCategory}>
                <span
                  className={`${(() => {
                    if (data.blog.category.category === "NEWS") {
                      return styles.catNews;
                    }
                    if (data.blog.category.category === "DIARY") {
                      return styles.catDiary;
                    }
                    if (data.blog.category.category === "EVENT") {
                      return styles.catEvent;
                    }
                  })()}`}
                >
                  {data.blog.category.category}
                </span>
              </p>
              <h1 className={styles.postTitle}>{data.blog.title}</h1>
            </div>
          </div>
          {data.blog.og_image && (
            <div
              className={styles.postOgImage}
              style={{
                aspectRatio: `${
                  data.blog.og_image.width / data.blog.og_image.height
                }`,
              }}
            >
              <picture>
                <source
                  media="(min-width: 1160px)"
                  type="image/webp"
                  srcSet={`${data.blog.og_image.url}?w=820&fm=webp, ${data.blog.og_image.url}?w=1640&fm=webp 2x`}
                />
                <source
                  media="(min-width: 820px)"
                  type="image/webp"
                  srcSet={`${data.blog.og_image.url}?w=740&fm=webp, ${data.blog.og_image.url}?w=1480&fm=webp 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  type="image/webp"
                  srcSet={`${data.blog.og_image.url}?w=728&fm=webp, ${data.blog.og_image.url}?w=1456&fm=webp 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  type="image/webp"
                  srcSet={`${data.blog.og_image.url}?w=375&fm=webp, ${data.blog.og_image.url}?w=750&fm=webp 2x`}
                />
                <Image
                  src={`${data.blog.og_image?.url}?w=820&q=100`}
                  alt={data.blog.title}
                  layout={"fill"}
                  objectFit={"contain"}
                />
              </picture>
            </div>
          )}
          <div className={styles.postContent}>
            <div
              className={styles.postBody}
              dangerouslySetInnerHTML={{ __html: data.blog.body }}
            ></div>
            <Share id={data.blog.id} title={data.blog.title} />
          </div>
        </div>
        <PostContact />
      </div>
    </div>
  );
};

export default Draft;
