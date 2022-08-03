import Link from "next/link";

import styles from "@/styles/Button.module.css";
import { FiMail } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

interface Props {
  children?: string;
  href?: string;
  type?: string;
  color?: string;
  size?: string;
  icon?: string;
  as?: string;
  variant?: string;
  target?: string;
}

const Button: React.FC<Props> = (props, buttonStyle) => {
  if (props.color === "light") {
    if (props.size === "small") {
      buttonStyle = `${styles.button} ${styles.small} ${styles.light}`;
    }
    if (props.size === "defalt" || !props.size) {
      buttonStyle = `${styles.button} ${styles.defalt} ${styles.light}`;
    }
  } else {
    if (props.size === "small") {
      buttonStyle = `${styles.button} ${styles.small}`;
    }
    if (props.size === "defalt" || !props.size) {
      buttonStyle = `${styles.button} ${styles.defalt}`;
    }
  }

  return (
    <>
      {props.type === "button" ? (
        <button className={buttonStyle} type="submit">
          <IoSend />
          {props.children}
        </button>
      ) : props.target === "_blank" ? (
        <Link href={props.href}>
          <a className={buttonStyle} target="_blank">
            {props.children}
          </a>
        </Link>
      ) : (
        <Link href={props.href} as={props.as}>
          <a className={buttonStyle}>
            {props.icon === "contact" && <FiMail />}
            {props.children}
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;
