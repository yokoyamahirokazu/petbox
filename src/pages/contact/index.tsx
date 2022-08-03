import { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Style.module.css";
import Router from "next/router";
import { useForm } from "react-hook-form";
import React from "react";
import Button from "@/components/Button";

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
    fetch("@/page/api/contact", {
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
        <div className={styles.section_inner}>
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
              {errors.name?.types?.required && (
                <p className={styles.errorText}>この質問は必須項目です</p>
              )}
              {errors.name?.types?.maxLength && (
                <p className={styles.errorText}>80文字以内で記入してください</p>
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
              {errors.email?.types?.required && (
                <p className={styles.errorText}>この質問は必須項目です</p>
              )}
              {errors.email?.types?.pattern && (
                <p className={styles.errorText}>
                  メールアドレスを入力してください
                </p>
              )}
            </div>
            {/* <div className={styles.formContentBox}>
              <label htmlFor="tel">
                電話番号<span className={styles.required}>必須</span>
              </label>
              <input
                type="tel"
                name="tel"
                {...register("tel", {
                  required: true,
                  maxLength: 14,
                })}
              />
              {errors.tel?.types?.required && (
                <p className={styles.errorText}>この質問は必須項目です</p>
              )}
              {errors.tel?.types?.maxLength && (
                <p className={styles.errorText}>電話番号を記入してください</p>
              )}
            </div> */}

            <div className={styles.formContentBox}>
              <label htmlFor="message">
                メッセージ<span className={styles.required}>必須</span>
              </label>
              <textarea
                name="message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message?.types?.required && (
                <p className={styles.errorText}>この質問は必須項目です</p>
              )}
            </div>
            <button type="submit">送信する</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
