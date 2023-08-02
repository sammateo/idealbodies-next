import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./landing.module.css";

function Landing() {
	const landingStyle = {
		// background:
		// 	path.pathname === "/technical"
		// 		? 'url("/images/instruments.jpg")'
		// 		: path.pathname === "/about"
		// 		? 'url("/images/patient/cataracts.webp")'
		// 		: 'url("/images/team.jpg")',
		backgroundImage: 'url("/images/landing.jpg")',
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		// backgroundPosition: path.pathname === "/technical" ? "center" : "top",
		// height: path.pathname === "/" ? "70vh" : "70vh",
	};
	return (
		<div className={styles.landing} style={landingStyle}>
			{/* <img src="/images/landing.jpg" alt="landing" /> */}
			<div className={styles.mask}></div>
			<Navbar />
		</div>
	);
}

export default Landing;
