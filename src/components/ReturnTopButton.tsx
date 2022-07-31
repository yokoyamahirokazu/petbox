import { useEffect, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";

import styles from "@/styles/Header.module.css";

const ReturnTopButton: React.FC = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 200; //ボタンを表示させたい位置
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
    position: "fixed" as const,
    right: "10px",
    bottom: "10px",
  };
  const activeStyle = {
    opacity: 1,
    transition: "0.5s",
    position: "fixed" as const,
    right: "10px",
    bottom: "10px",
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <button className={styles.toTopBtn} style={style} onClick={returnTop}>
      <FiChevronsUp />
    </button>
  );
};

export default ReturnTopButton;
