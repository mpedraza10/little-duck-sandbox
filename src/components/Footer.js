// Styles
import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span className={styles.copy}>
				© {new Date().getFullYear()} Miguel Pedraza |{" "}
				<Link href="https://miguelped.com/">Portfolio</Link>
			</span>
		</footer>
	);
};

export default Footer;
