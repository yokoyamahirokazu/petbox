import Link from "next/link";
import Image from "next/image";
import React from "react";

import DrawerMenu from "@/components/DrawerMenu";
import ReturnTopButton from "@/components/ReturnTopButton";
import styles from "@/styles/Header.module.css";
import {
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Header: React.FC = () => {
  const navItem = [
    { url: "/", name: "HOME" },
    { url: "/news/", name: "NEWS" },
    { url: "/terms/", name: "ABOUT US" },
    { url: "/terms/", name: "ONLINE STORE" },
    { url: "/terms/", name: "CONTACT" },
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
      <header className={styles.header}>
        <div className={styles.header_inner}>
          <Link href={"/"}>
            <a className={styles.header_logo}>
              <Image
                src={"/logo.png"}
                alt=""
                layout={"fill"}
                objectFit={"cover"}
              />
            </a>
          </Link>

          <nav className={styles.header_nav}>
            <ul>
              {navItem.map((navContent, index) => (
                <li key={index}>
                  <Link href={navContent.url}>
                    <a>{navContent.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <DrawerMenu navItems={navItem} snsItems={snsItem} />
        </div>
        <div className={styles.header_sns}>
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
        </div>
      </header>
      <ReturnTopButton />
    </>
  );
};
export default Header;
