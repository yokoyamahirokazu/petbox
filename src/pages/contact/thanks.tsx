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
            <h1 className={styles.headlineCenter}>CONTACT</h1>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section_inner}>thank you</div>
      </section>
    </>
  );
};
export default Thanks;
