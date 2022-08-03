import Link from "next/link";

import styles from "@/styles/Style.module.css";
import {
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const FollowUs: React.FC = () => {
  const snsItem = [
    {
      url: "https://www.youtube.com/channel/UC2a-gQlZhTM4vG68CDBDetg",
      name: "Youtube",
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
      name: "Facebook",
      icon: <FaFacebookF />,
    },
    { url: "/terms/", name: "TikTok", icon: <FaTiktok /> },
  ];

  return (
    <section>
      <div className={styles.section_inner}>
        <ul className={styles.followUs}>
          <li>
            <p className={styles.headline3}>FOLLOW US</p>
          </li>
          {snsItem.map((snsContent, index) => (
            <li key={index}>
              <>
                <Link href={snsContent.url}>
                  <a target={"_blank"}>
                    {snsContent.icon}
                    <p>{snsContent.name}</p>
                  </a>
                </Link>
              </>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FollowUs;
