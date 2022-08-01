import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import { Share } from "@/components/Share";
import { IBlog, ICategory } from "@/types";
import { convertToHtml } from "@/scripts/PostsUtil";
import { getAllBlogs, getBlogById, getContents } from "@/framework/blog";
import styles from "@/styles/Style.module.css";
import Image from "next/image";
import { client } from "@/framework/client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Categories from "@/components/Categories";
import { format } from "date-fns";

type DetailProps = {
  blog: IBlog;
  body: string;
  blogs: IBlog[];
  categories: ICategory[];
  prevEntry: IBlog;
  nextEntry: IBlog;
};

const Detail: NextPage<DetailProps> = (props) => {
  const router = useRouter();

  const cotegoryLink = "/news/category/" + props.blog.category.id + "/page/1";
  const cotegoryLinkName = props.blog.category.category + "の記事一覧を見る";

  return (
    <>
      <div className={styles.postWrapper}>
        <div className={styles.postTitleFlex}>
          <div className={styles.postTitleBox}>
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
                  } else {
                    return "";
                  }
                })()}`}
              >
                {props.blog.category.category}
              </span>
            </p>
            <h1 className={styles.postTitle}>{props.blog.title}</h1>
          </div>
          <p className={styles.postDate}>
            <span>{format(new Date(props.blog.publishedAt), "dd")}</span>
            {format(new Date(props.blog.publishedAt), "MMM.yyyy")}
          </p>
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
            dangerouslySetInnerHTML={{ __html: props.body }}
          ></div>
          <Share id={props.blog.id} title={props.blog.title} />
        </div>
      </div>

      <div className={styles.nextPreviewWrapper}>
        <div className={styles.nextPreview}>
          <div className={styles.nextPreviewbox}>
            {(() => {
              if (props.nextEntry.id) {
                return (
                  <a
                    className={styles.prev}
                    href={`/news/${props.nextEntry.id}`}
                  >
                    {props.nextEntry.title}
                    <IoIosArrowBack />
                  </a>
                );
              }
            })()}
          </div>
          <div className={styles.nextPreviewbox}>
            {(() => {
              if (props.prevEntry.id) {
                return (
                  <a
                    className={styles.next}
                    href={`/news/${props.prevEntry.id}`}
                  >
                    {props.prevEntry.title}
                    <IoIosArrowForward />
                  </a>
                );
              }
            })()}
          </div>
        </div>
      </div>

      <div className={styles.categoryLinkBtnBox}>
        <Categories categories={props.categories} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const ids = blogs.contents.map((blog) => {
    return { params: { blogId: blog.id } };
  });
  return {
    paths: ids,
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const blogId: any = context.params?.blogId || "1";
  const blog = await getBlogById(blogId);
  const body = convertToHtml(blog.body);
  const { blogs, categories } = await getContents();

  const entry = await client.get({ endpoint: "news", contentId: blogId });
  const fields = "id,title,publishedAt";
  const prev = await client.get({
    endpoint: "news",
    queries: {
      limit: 1,
      orders: "-publishedAt",
      fields,
      filters: `publishedAt[less_than]${entry.publishedAt}`,
    },
  });

  const next = await client.get({
    endpoint: "news",
    queries: {
      limit: 1,
      orders: "publishedAt",
      fields,
      filters: `publishedAt[greater_than]${entry.publishedAt}`,
    },
  });

  const prevEntry = prev.contents[0] || {};
  const nextEntry = next.contents[0] || {};

  return {
    props: {
      blog,
      body,
      blogs,
      categories,
      prevEntry,
      nextEntry,
    },
  };
}
export default Detail;
