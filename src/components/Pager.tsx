import NextLink from "next/link";
import { ICategory } from "@/types";
import styles from "@/styles/Style.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type PagerProps = {
  currentPage: number;
  selectedCategory?: ICategory;
  pager: [];
};

const Pager: React.FC<PagerProps> = (props) => {
  const getPath = (pageNumber) => {
    if (props.selectedCategory) {
      return `/news/category/${props.selectedCategory.id}/page/${pageNumber}`;
    } else {
      return `/news/page/${pageNumber}`;
    }
  };
  return (
    <div>
      <ul className={styles.pager}>
        {props.currentPage > 1 && (
          <li className={styles.page}>
            <NextLink href={getPath(props.currentPage - 1)}>
              <a>
                <IoIosArrowBack />
              </a>
            </NextLink>
          </li>
        )}
        {props.currentPage > 3 && (
          <li className={styles.page}>
            <NextLink href={getPath(1)}>
              <a>1</a>
            </NextLink>
          </li>
        )}
        {props.currentPage > 4 && <li className={styles.omission}>...</li>}
        {props.pager.map((page, index) => {
          return (
            <>
              {props.currentPage - 3 <= page && page <= props.currentPage + 1 && (
                <li
                  key={index}
                  className={`${styles.page} ${
                    props.currentPage === page + 1 ? `${styles.active}` : ""
                  }`}
                >
                  <NextLink href={getPath(page + 1)}>
                    <a>{page + 1}</a>
                  </NextLink>
                </li>
              )}
            </>
          );
        })}
        {props.currentPage + 3 < props.pager.length && (
          <li className={styles.omission}>...</li>
        )}
        {props.currentPage + 2 < props.pager.length && (
          <li className={styles.page}>
            <NextLink href={getPath(props.pager.length)}>
              <a>{props.pager.length}</a>
            </NextLink>
          </li>
        )}
        {props.currentPage < props.pager.length && (
          <li className={`${styles.page} ${styles.arrow}`}>
            <NextLink href={getPath(props.currentPage + 1)}>
              <a>
                <IoIosArrowForward />
              </a>
            </NextLink>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Pager;
