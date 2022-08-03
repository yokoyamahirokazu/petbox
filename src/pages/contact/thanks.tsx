import { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Style.module.css";
import React from "react";

const Thanks: NextPage = () => {
  return (
    <>
      <Head>
        <title>PETBOX</title>
        <meta name="description" content="PETBOX" />
      </Head>

      <section>
        <div className={styles.section_inner}>
          <div className={styles.headlineBox}>
            <h1 className={styles.headlineCenter}>THANK YOU !</h1>
          </div>
          <div className={styles.contactContent}>
            <p>
              送信完了しました ！<br />
              この度はお問い合わせいただき誠にありがとうございます。
              <br />
              お問い合わせ内容を確認の上、担当者よりご連絡させていただきます。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Thanks;
