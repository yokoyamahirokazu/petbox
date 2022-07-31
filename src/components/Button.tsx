import Link from 'next/link';

import styles from '@/styles/Button.module.css';

interface Props {
  children?: string;
  href?: string;
  type?: string;
  color?: string;
  size?: string;
  icon?: string;
  as?: string;
  variant?: string;
}

const Button: React.FC<Props> = (props, buttonStyle) => {
  if (props.size === 'small') {
    buttonStyle = `${styles.button} ${styles.small}`;
  }
  if (props.size === 'defalt' || !props.size) {
    buttonStyle = `${styles.button} ${styles.defalt}`;
  }

  return (
    <Link href={props.href} as={props.as}>
      <a className={buttonStyle}>{props.children}</a>
    </Link>
  );
};

export default Button;
