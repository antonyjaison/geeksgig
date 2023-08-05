import styles from "@styles/commingsoon.module.scss";
import { Cabin } from "next/font/google";
import Link from "next/link";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CommingSoon = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.left_wrapper}>
        <Link className={styles.logo} href='/'>geeksgig</Link>
        <h1>
          We’ll be <br /> up and running in no time!
        </h1>
        <div className={styles.bottom_section}>
          <p>
            Get ready for a groundbreaking experience! We are thrilled to
            announce that geeksgig is working on something extraordinary, and we
            can't wait to share it with you.
          </p>
          <div className={styles.contact}>
            <a href="mailto:antony@gmail.com">email@gmail.com</a>
            <a href="tel:9876543210">a9876543210</a>
          </div>
        </div>
      </div>
      <div className={styles.right_wrapper}>
        <img className={styles.image} src="/images/comming_soon_img.png" />
        <div className={styles.right_div}></div>
      </div>
      <div className={styles.mobile_div}></div>
    </main>
  );
};

export default CommingSoon;
