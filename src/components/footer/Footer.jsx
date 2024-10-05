import React from "react";
import styles from './footer.module.css'
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div>
        <div className={styles.social}>
        <Image src="/1.png" alt="Lama Dev" height={15} className={styles.icon} width={15} />
        <Image src="/2.png" alt="Lama Dev" height={15} className={styles.icon} width={15} />
        <Image src="/3.png" alt="Lama Dev" height={15} className={styles.icon} width={15} />
        <Image src="/4.png" alt="Lama Dev" height={15} className={styles.icon} width={15} />
        </div>
        
      </div>
    </div>
  );
}
