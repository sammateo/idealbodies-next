import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<h2 className={styles.hero}>Ideal Bodies</h2>

			<div className={styles.navitems}>
				<p>
					<Link className="navlink" href="/">
						Home
					</Link>
				</p>
				<p>
					{" "}
					<Link className="navlink" href="/about">
						About Us
					</Link>
				</p>
				<p>
					{" "}
					<Link className="navlink" href="/contact">
						Contact Us
					</Link>
				</p>
			</div>
		</div>
	);
}
