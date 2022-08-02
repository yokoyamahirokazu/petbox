import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Pager from "@/components/Pager";
import { IBlog, ICategory } from "@/types";
import { getContents } from "@/framework/blog";
import styles from "@/styles/Style.module.css";
import Image from "next/image";
import Categories from "@/components/Categories";
import { format } from "date-fns";

type PageProps = {
  currentPage: number;
  blogs: IBlog[];
  categories: ICategory[];
  pager: [];
  selectedCategory: ICategory;
};

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return;
  }
  return (
    <>
      <section>
        <div className={styles.section_inner}>
          <div className={styles.headlineBox}>
            <h2 className={styles.headlineCenter}>
              <span>NEWS RELEASE</span>
              {props.selectedCategory.category}
            </h2>
            <Categories categories={props.categories} />
          </div>
          {props.blogs.length === 0 ? (
            <>記事がありません</>
          ) : (
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
          )}
          {props.blogs.length > 0 && (
            <ul className={"pager"}>
              <Pager
                pager={props.pager}
                currentPage={props.currentPage}
                selectedCategory={props.selectedCategory}
              />
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const page: any = context.params?.id || "1";
  const categoryId = context.params?.categoryId;
  const articleFilter =
    categoryId !== undefined ? `category[equals]${categoryId}` : undefined;
  const { blogs, pager, categories } = await getContents(page, articleFilter);
  const selectedCategory =
    categoryId !== undefined
      ? categories.find((content) => content.id === categoryId)
      : undefined;

  return {
    props: {
      currentPage: parseInt(page),
      blogs,
      categories,
      pager,
      selectedCategory,
    },
  };
}
export default Page;
