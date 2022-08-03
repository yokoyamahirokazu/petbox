import Link from "next/link";

import styles from "@/styles/Style.module.css";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import Button from "./Button";

const PostContact: React.FC = () => {
  const snsItem = [
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
  ];

  return (
    <div className={styles.postContact}>
      <h2 className={styles.headline3}>CONTACT</h2>
      <div className={styles.postContactFlex}>
        <div className={styles.postContactBox}>
          <p>WEBからのお問い合わせはこちら</p>
          <Button href="/contact" color="light" icon="contact">
            CONTACT
          </Button>
        </div>
        <div className={styles.postContactBox}>
          <p>SNSのメッセージでもOK!</p>
          <ul className={styles.postContactSns}>
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
      </div>
    </div>
  );
};

export default PostContact;
