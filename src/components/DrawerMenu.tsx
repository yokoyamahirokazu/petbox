import Link from "next/link";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Drawer from "react-modern-drawer";
import Image from "next/image";

import styles from "@/styles/Header.module.css";

import "react-modern-drawer/dist/index.css";

interface Nav {
  url?: string;
  name?: string;
}
interface Sns {
  url?: string;
  name?: string;
  icon?: JSX.Element;
}
type Props = {
  navItems?: Nav[];
  snsItems?: Sns[];
};

const DrawerMenu: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className={styles.drawerBtn} onClick={toggleDrawer}>
        <BiMenuAltRight />
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className={styles.drawerInner}>
          <div className={styles.drawerInnerContent}>
            <div className={styles.drawerLogo}>
              <Image
                src={"/logo.png"}
                alt=""
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>

            <ul className={styles.drawerNav}>
              {props.navItems.map((items, index) => (
                <li key={index}>
                  <Link href={`${items.url}`} as={`${items.url}`}>
                    <a onClick={toggleDrawer}>{items.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.drawerNavSns}>
              <ul className={styles.snsList}>
                {props.snsItems.map((snsContent, index) => (
                  <li key={index}>
                    <Link href={snsContent.url}>
                      <a onClick={toggleDrawer} target={"_blank"}>
                        {snsContent.icon}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
