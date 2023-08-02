import React from "react";
import styles from "./subtitle.module.css";
function Subtitle({ text }) {
	return <h2 className={styles.subtitle}>{text}</h2>;
}

export default Subtitle;
