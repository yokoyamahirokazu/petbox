import { NextPage } from "next";
import { IBlog, ICategory } from "@/types";
import { useRouter } from "next/dist/client/router";
import { useDraft } from "@/hooks/useDraft";

import { Share } from "@/components/Share";
import { getContents } from "@/framework/blog";
import styles from "@/styles/Style.module.css";
import Image from "next/image";

type DraftProps = {
  blogs: IBlog[];
  categories: ICategory[];
};

const Draft: NextPage<DraftProps> = (props) => {
  const { data, isLoading } = useDraft();
  const router = useRouter();

  if (isLoading || !data) {
    return;
  }
  return (
    <>
      <div className={styles.postPage}>
        {data.blog.og_image && (
          <div className={styles.postOgpImage}>
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
          <h1 className={styles.title}>{data.blog.title}</h1>
          <div className={styles.postMetaFlex}>
            <Share id={data.blog.id} title={data.blog.title} />
          </div>

          <div
            className={styles.postBody}
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></div>

          <div className={styles.postContactBox}>
            <div className={styles.postContactBoxLogo}>
              <div className={styles.postContactBoxLogoImg}>
                <Image
                  src="/images/rura_logo_blue.svg"
                  alt={data.blog.title}
                  layout={"fill"}
                  objectFit={"contain"}
                />
              </div>
              <p>資料ダウンロード・お問い合わせはこちら</p>
            </div>
            <div className={styles.contactSectionLogoBtn}></div>
          </div>
          <Share id={data.blog.id} title={data.blog.title} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { blogs, categories } = await getContents();
  return {
    props: {
      blogs,
      categories,
    },
  };
}
export default Draft;
