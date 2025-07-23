import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const staticData = [
  {
    _id: "1",
    title: "First Blog Post",
    desc: "This is the description for the first blog post.",
    img: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
  },
  {
    _id: "2",
    title: "Second Blog Post",
    desc: "This is the description for the second blog post.",
    img: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
  },
];

export default function Blog() {
  const data = staticData;

  return (
    <div className={styles.container}>
      {data && data.length > 0 ? (
        data.map((item) => {
          const imageUrl = item.img;

          return (
            <Link
              href={`/blog/${item._id}`}
              className={styles.item}
              key={item._id}
            >
              <div className={styles.imgContainer}>
                <Image src={imageUrl} alt="" fill={true} />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>there is no blogs yet</p>
      )}
    </div>
  );
}
