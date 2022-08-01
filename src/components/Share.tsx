import NextLink from "next/link";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaTwitter, FaFacebookF, FaLine } from "react-icons/fa";

import { config } from "site.config";
import styles from "@/styles/Style.module.css";

type ShareProps = {
  id: string;
  title?: string;
  tagData?: string;
};

export const Share: React.FC<ShareProps> = (props) => {
  const updateText = config.baseUrl + "/news/" + props.id;

  const twitterLink = `https://twitter.com/intent/tweet?text=${props.title}&url=${config.baseUrl}/news/${props.id}/${props.tagData}`;
  const facebookLink = `https://www.facebook.com/sharer.php?u=${config.baseUrl}/news/${props.id}/`;
  const LineLink = `https://social-plugins.line.me/lineit/share?url=${config.baseUrl}/news/${props.id}/`;

  return (
    <ul className={styles.shareIcons}>
      <li>SHARE</li>
      <li>
        <CopyToClipboard
          text={updateText}
          onCopy={() => alert(`URLをコピーしました！`)}
        >
          <button>
            <FaRegCopy />
          </button>
        </CopyToClipboard>
      </li>
      <li>
        <NextLink href={twitterLink}>
          <a target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </NextLink>
      </li>
      <li>
        <NextLink href={facebookLink}>
          <a target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </NextLink>
      </li>

      <li>
        <NextLink href={LineLink}>
          <a target="_blank" rel="noopener noreferrer">
            <FaLine />
          </a>
        </NextLink>
      </li>
    </ul>
  );
};
