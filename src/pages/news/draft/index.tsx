import { NextPage } from "next";

import { Share } from "@/components/Share";
import styles from "@/styles/Style.module.css";
import Image from "next/image";
import PostContact from "@/components/PostContact";
import { client } from "@/framework/client";
import { IBlog } from "@/types";
import { getAllBlogs } from "@/framework/blog";
import { format } from "date-fns";

type DetailProps = {
  blog: IBlog;
};
const Draft: NextPage<DetailProps> = (props) => {
  return (
    <div className={styles.postFlex}>
      <div className={styles.postFlexLeft}>
        <div className={styles.postWrapper}>
          <div className={styles.postTitleFlex}>
            {props.blog.publishedAt && (
              <p className={styles.postDate}>
                <span>{format(new Date(props.blog.publishedAt), "dd")}</span>
                {format(new Date(props.blog.publishedAt), "MMM.yyyy")}
              </p>
            )}
            <div className={styles.postTitleBox}>
              {props.blog.category && (
                <p className={styles.postCategory}>
                  <span
                    className={`${(() => {
                      if (props.blog.category.category === "NEWS") {
                        return styles.catNews;
                      }
                      if (props.blog.category.category === "DIARY") {
                        return styles.catDiary;
                      }
                      if (props.blog.category.category === "EVENT") {
                        return styles.catEvent;
                      }
                    })()}`}
                  >
                    {props.blog.category.category}
                  </span>
                </p>
              )}

              <h1 className={styles.postTitle}>{props.blog.title}</h1>
            </div>
          </div>
          {props.blog.og_image && (
            <div
              className={styles.postOgImage}
              style={{
                aspectRatio: `${
                  props.blog.og_image.width / props.blog.og_image.height
                }`,
              }}
            >
              <picture>
                <source
                  media="(min-width: 1160px)"
                  type="image/webp"
                  srcSet={`${props.blog.og_image.url}?w=820&fm=webp, ${props.blog.og_image.url}?w=1640&fm=webp 2x`}
                />
                <source
                  media="(min-width: 820px)"
                  type="image/webp"
                  srcSet={`${props.blog.og_image.url}?w=740&fm=webp, ${props.blog.og_image.url}?w=1480&fm=webp 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  type="image/webp"
                  srcSet={`${props.blog.og_image.url}?w=728&fm=webp, ${props.blog.og_image.url}?w=1456&fm=webp 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  type="image/webp"
                  srcSet={`${props.blog.og_image.url}?w=375&fm=webp, ${props.blog.og_image.url}?w=750&fm=webp 2x`}
                />
                <Image
                  src={`${props.blog.og_image?.url}?w=820&q=100`}
                  alt={props.blog.title}
                  layout={"fill"}
                  objectFit={"contain"}
                />
              </picture>
            </div>
          )}
          <div className={styles.postContent}>
            <div
              className={styles.postBody}
              dangerouslySetInnerHTML={{ __html: props.blog.body }}
            ></div>
            <Share id={props.blog.id} title={props.blog.title} />
          </div>
        </div>
        <PostContact />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // 記事IDを取得する
  const slug = context.previewData?.slug;

  // draftKeyを取得し、クエリを作成する
  const draftKey = context.previewData?.draftKey
    ? { draftKey: context.previewData.draftKey }
    : {};

  // 記事を取得する
  const data = await client.get({
    endpoint: "news",
    contentId: slug,
    queries: draftKey,
  });

  // 記事が存在しなければ404エラーを返す
  if (!data) {
    return { notFound: true };
  }

  // 記事とdraftKeyをpropsに渡す
  return {
    props: {
      blog: data,
      ...draftKey,
    },
  };
}

export default Draft;
