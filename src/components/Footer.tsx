import styles from "@/styles/Footer.module.css";

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.copy_right}>
        Copyright© {thisYear} Timeleap inc. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
