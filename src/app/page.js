import Services from "@/components/services/Services";
import styles from "./page.module.css";
import Landing from "@/components/landing/Landing";

export default function Home() {
	return (
		<main className={styles.main}>
			<Landing />
			<Services />
		</main>
	);
}
