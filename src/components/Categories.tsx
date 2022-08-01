import { ICategory } from "@/types";
import styles from "@/styles/Style.module.css";
import Link from "next/link";

type CategoriesProps = {
  categories: ICategory[];
};

const Categories: React.FC<CategoriesProps> = (props) => {
  return (
    <ul className={styles.newsCategoryList}>
      {props.categories.map((category) => {
        return (
          <li key={category.id}>
            <Link
              href="/news/category/[categoryId]/page/[id]"
              as={`/news/category/${category.id}/page/1`}
            >
              <a className={styles.hoverBorder}>{category.category}</a>
            </Link>
          </li>
        );
      })}
      <li>
        <Link href="/news/page/[id]" as={`/news/page/1`}>
          <a className={styles.hoverBorder}>ALL</a>
        </Link>
      </li>
    </ul>
  );
};
export default Categories;
