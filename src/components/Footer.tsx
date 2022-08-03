import styles from "@/styles/Footer.module.css";
import FollowUs from "./FollowUs";
import Link from "next/link";
import Image from "next/image";

import type { ICategory } from "@/types";
import {
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
type Props = {
  categories?: ICategory[];
};

const Footer: React.FC<Props> = (props) => {
  const thisYear = new Date().getFullYear();
  const navItemA = [
    { url: "/", name: "HOME" },
    { url: "/about", name: "ABOUT US" },
    {
      url: "https://petbox1976.official.ec/",
      name: "ONLINE STORE",
      target: "_blank",
    },
    { url: "/contact", name: "CONTACT" },
    { url: "/privacy-policy", name: "PRIVACY POLICY" },
  ];
  const navCtegory = [
    {
      url: "/news/category/[categoryId]/page/[id]",
      as: "/news/category/diary/page/1",
      name: "DIARY",
    },
    {
      url: "/news/category/[categoryId]/page/[id]",
      as: "/news/category/event/page/1",
      name: "EVENT",
    },
    {
      url: "/news/category/[categoryId]/page/[id]",
      as: "/news/category/news/page/1",
      name: "NEWS",
    },
  ];

  const snsItem = [
    {
      url: "https://www.youtube.com/channel/UC2a-gQlZhTM4vG68CDBDetg",
      name: "youtube",
      icon: <FaYoutube />,
    },
    {
      url: "https://twitter.com/petbox1976",
      name: "twitter",
      icon: <FaTwitter />,
    },
    {
      url: "https://www.instagram.com/petbox_gakudai/",
      name: "instagram",
      icon: <FaInstagram />,
    },
    {
      url: "https://www.facebook.com/petbox1976",
      name: "facebook",
      icon: <FaFacebookF />,
    },
    { url: "/terms/", name: "tiktok", icon: <FaTiktok /> },
  ];

  return (
    <>
      <FollowUs />
      <footer className={styles.footer}>
        <div className={styles.footerFlex}>
          <Link href={"/"}>
            <a className={styles.footerLogo}>
              <Image
                src={"/logo.png"}
                alt=""
                layout={"fill"}
                objectFit={"cover"}
              />
            </a>
          </Link>

          <div className={styles.footerNav}>
            <ul>
              {navItemA.map((navContent, index) => (
                <li key={index}>
                  {navContent.target === "_blank" ? (
                    <Link href={navContent.url}>
                      <a target="_blank">{navContent.name}</a>
                    </Link>
                  ) : (
                    <Link href={navContent.url}>
                      <a>{navContent.name}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <Link href="/news/page/[id]" as="/news/page/1">
                  <a>NEWS RELEASE</a>
                </Link>
                <ul>
                  {navCtegory.map((navCategory, index) => (
                    <li key={index}>
                      <Link href={navCategory.url} as={navCategory.as}>
                        <a>{navCategory.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <ul className={styles.snsList}>
          {snsItem.map((snsContent, index) => (
            <li key={index}>
              <>
                <Link href={snsContent.url}>
                  <a target={"_blank"}>{snsContent.icon}</a>
                </Link>
              </>
            </li>
          ))}
        </ul>
        <p className={styles.copy_right}>
          Copyright© {thisYear} PET-BOX All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
