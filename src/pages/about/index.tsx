import { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Style.module.css";
import Image from "next/image";
import GoogleMapReact from "google-map-react";

const About: NextPage = () => {
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  return (
    <>
      <Head>
        <title>PETBOX</title>
        <meta name="description" content="PETBOX" />
      </Head>

      <section>
        <div className={styles.section_inner}>
          <div className={styles.headlineBox}>
            <h1 className={styles.headlineCenter}>ABOUT US</h1>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section_inner}>
          <div className={styles.aboutBox}>
            <div className={styles.aboutBoxTxt}>
              <h2>ごあいさつ</h2>
              <p>
                東京・東急東横線「学芸大学駅」出てすぐ
                商店街の入り口にあるPET-BOX(ペットボックス)です。
                <br />
                セキセイインコ・文鳥・オカメインコなどの小鳥をメインにうさぎやハムスターなどの小動物、ペット用品、ペットフード、動物モチーフの雑貨などを取り扱っております。
              </p>
            </div>
            <div className={styles.aboutBoxImg}>
              <Image
                src={"/about_a.png"}
                alt=""
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section_inner}>
          <div className={styles.aboutBox}>
            <div className={styles.aboutBoxTxt}>
              <p>
                ペットボックスは1976年に祖父母がはじめた小さな小鳥屋さんです。
                <br />
                賑やかな学芸大学の商店街の片隅で地元の方々に愛されながらお店を営んできました。
                <br />
                <br />
                現在は孫が引継ぎ、小さな動物たちと人間がお互いに幸せに過ごせるよう家族の一員へと動物をお迎えするお手伝いをしております。
                <br />
                <br />
                はじめて動物をお迎えする方もお気軽にご相談ください。
              </p>
            </div>
            <div className={styles.aboutBoxImg}>
              <Image
                src={"/about_b.png"}
                alt=""
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section_inner}>
          <div className={styles.aboutBox}>
            <div className={styles.aboutBoxTxt}>
              <p>
                動物たちがリラックスして自然体でいられるよう、心がけながら日々お世話しております。
                <br />
                <br />
                お店にいる動物たちを、毎日Instagram
                やTwitterで紹介しております。
                <br />
                ご予約済の動物たちもおりますので、気になる子がおりましたら
                お気軽に店舗までお問い合わせください。
              </p>
            </div>
            <div className={styles.aboutBoxImg}>
              <Image
                src={"/about_c.png"}
                alt=""
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.accessBox}>
        <div className={styles.accessBoxMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.8020468634!2d139.6856611!3d35.6289465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd4582ddfb683d8!2zUEVUQk9Y77yI44Oa44OD44OI44Oc44OD44Kv44K577yJ!5e0!3m2!1sja!2sjp!4v1659434904671!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <div className={styles.accessBoxInfo}>
          <div className={styles.accessBoxInfoBox}>
            <h2 className={styles.headline3}>ACCESS</h2>
            <div className={styles.accessBoxLogo}>
              <Image
                src={"/logo.png"}
                alt=""
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
            <p>
              〒152-0004 東京都目黒区鷹番3-3-18
              <br />
              TEL 00-0000-0000
              <br />
              営業時間：11〜18時
              <br />
              定休日：不定休
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
