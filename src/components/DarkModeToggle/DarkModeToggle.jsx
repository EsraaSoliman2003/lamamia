"use client"
import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeToggle() {
    const {toggleMode, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode === "light" 
      ? {transform: "translateX(0)" }
      : {transform: "translateX(18px)" }
      }/>
    </div>
  );
}
