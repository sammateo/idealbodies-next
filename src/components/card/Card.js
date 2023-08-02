import React from "react";
import styles from "./card.module.css";
function Card({ service }) {
	return (
		<div className={styles.card}>
			<div>
				<img src="/images/barbell.jpg" alt="" />
			</div>
			<div className={styles.text}>
				{service.itemList.map((item) => (
					<p key={item}>{item}</p>
				))}
			</div>
		</div>
	);
}

export default Card;
