"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    Url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    Url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    Url: "/blog",
  },
  {
    id: 4,
    title: "About",
    Url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    Url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    Url: "/dashboard",
  },
];

export default function Navbar() {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        lamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.Url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
