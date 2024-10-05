import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data && data.length > 0 ? (
        data.map((item) => {
          const imageUrl =
            item.img.startsWith("/") ||
            item.img.startsWith("http://") ||
            item.img.startsWith("https://")
              ? item.img
              : ``;

          return (
            <Link
              href={`/blog/${item._id}`}
              className={styles.item}
              key={item.id}
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
