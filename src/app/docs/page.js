// Styles
import styles from "@/styles/DocsPage.module.css";

const DocsPage = () => {
	return (
		<section className={styles.docsSection}>
			<div className={styles.pdfContainer}>
				<embed
					className={styles.compilerDoc}
					src="/files/CompiladorPLY.pdf"
					type="application/pdf"
				/>
			</div>
		</section>
	);
};

export default DocsPage;
