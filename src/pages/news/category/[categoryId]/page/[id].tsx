import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Pager from "@/components/Pager";
import { IBlog, ICategory } from "@/types";
import { getContents } from "@/framework/blog";
import styles from "@/styles/Style.module.css";
import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";

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
                  <li key={newsItem.id}>
                    <PostCard newsItem={newsItem} />
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
