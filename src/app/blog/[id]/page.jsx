import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const staticData = {
  title: "Sample Blog Post",
  desc: "This is a sample description for the blog post.",
  username: "JohnDoe",
  content: "This is the content of the sample blog post.",
  img: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
};

export default function BlogPost({ params }) {
  const data = staticData;

  const imageUrl = data.img;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={imageUrl} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
}
