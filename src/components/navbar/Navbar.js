"use client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();

	const navStyle = {
		backgroundColor: pathname === "/" ? "transparent" : "#88B06A",
	};
	console.log(pathname);
	return (
		<div className={styles.navbar} style={navStyle}>
			<Link className="navlink" href="/">
				<h2 className={styles.hero}>Ideal Bodies Fitness Studio</h2>
			</Link>
			<div className={styles.navitems}>
				<p>
					<Link className="navlink" href="/">
						Packages
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
