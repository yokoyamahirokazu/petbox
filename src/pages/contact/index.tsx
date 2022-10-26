import { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Style.module.css";
import Router from "next/router";
import { useForm } from "react-hook-form";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    shouldFocusError: false,
  });

  const submit = (values) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status === 200) {
        Router.push("/contact/thanks");
      }
    });
  };

  return (
    <>
      <Head>
        <title>PETBOX Since 1976</title>
        <meta name="description" content="PETBOX" />
      </Head>

      <section>
        <div className={styles.section_inner}>
          <div className={styles.headlineBox}>
            <h1 className={styles.headlineCenter}>CONTACT</h1>
          </div>

          <div className={styles.contactContent}>
            <form onSubmit={handleSubmit(submit)}>
              <div className={styles.formContentBox}>
                <label htmlFor="name">
                  お名前<span className={styles.required}>必須</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true, maxLength: 80 })}
                />
                {errors.name?.required && (
                  <p className={styles.errorText}>この質問は必須項目です</p>
                )}
                {errors.name?.maxLength && (
                  <p className={styles.errorText}>
                    80文字以内で記入してください
                  </p>
                )}
              </div>
              <div className={styles.formContentBox}>
                <label htmlFor="email">
                  メールアドレス<span className={styles.required}>必須</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email?.required && (
                  <p className={styles.errorText}>この質問は必須項目です</p>
                )}
                {errors.email?.pattern && (
                  <p className={styles.errorText}>
                    メールアドレスを入力してください
                  </p>
                )}
              </div>

              <div className={styles.formContentBox}>
                <label htmlFor="message">
                  メッセージ<span className={styles.required}>必須</span>
                </label>
                <textarea
                  name="message"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message?.required && (
                  <p className={styles.errorText}>この質問は必須項目です</p>
                )}
              </div>
              <div className={styles.submitBox}>
                <p>
                  「
                  <Link href="/privacy-policy">
                    <a target={"_blank"}>プライバシーポリシー</a>
                  </Link>
                  」に同意していただけましたら、「送信する」ボタンをクリックしてください。
                </p>
                <Button type="button">送信する</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
