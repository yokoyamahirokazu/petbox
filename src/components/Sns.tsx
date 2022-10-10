import React from "react";
import { Timeline } from "react-twitter-widgets";
import styles from "@/styles/Style.module.css";

const Tweet: React.FC = () => {
  return (
    <section>
      <div className={styles.itemList_inner}>
        <div className={styles.snsFlex}>
          <div className={styles.snsFlexTweet}>
            <div className={styles.headlineBox}>
              <h2 className={styles.headlineCenter}>TWEET</h2>
            </div>
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "PetBox1976", // アカウント名
              }}
              options={{
                height: "640",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tweet;
