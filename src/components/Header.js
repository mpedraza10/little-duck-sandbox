"use client";

// Next imports
import Image from "next/image";
import Link from "next/link";

// React imports
import { useState, useEffect } from "react";

// Utils
import { navItems } from "@/utils/constants";

// Styles
import styles from "@/styles/Header.module.css";

/*
<Image
    src=""
    alt="Logo"
    width={50}
    height={50}
    priority={true}
/>
*/

const Header = () => {
	// States
	const [menuOpened, setMenuOpened] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [activeSection, setActiveSection] = useState("Inicio");
	const [scrolled, setScrolled] = useState(false);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const toggleMenu = () => isMobile && setMenuOpened(!menuOpened);

	// Effect to check if is mobile
	useEffect(() => {
		const handleResize = () => {
			// Update isMobile state based on viewport width
			setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
		};

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Call handleResize initially to set the initial state
		handleResize();

		// Cleanup function to remove event listener when component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className={`${styles.header} ${menuOpened ? styles.open : ""}`}>
			<div className={styles.headerContent}>
				<Link
					href="/"
					onClick={() => {
						if (menuOpened) toggleMenu();
					}}
					className={styles.logoCont}
				>
					<span className={styles.logoTitle}>Little Duck Sandbox</span>
				</Link>
				<nav className={`${styles.menu} ${menuOpened ? styles.show : ""}`}>
					<ul>
						{navItems.map((item, index) => (
							<li onClick={toggleMenu} key={index}>
								<Link
									href={item.url}
									target="_blank"
									className={`${
										activeSection === item.name ? styles.activeLink : ""
									}`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.hamburgerMenu} onClick={toggleMenu}>
					<div
						className={`${styles.bar} ${menuOpened ? styles.change : ""}`}
					></div>
					<div
						className={`${styles.bar} ${menuOpened ? styles.change : ""}`}
					></div>
					<div
						className={`${styles.bar} ${menuOpened ? styles.change : ""}`}
					></div>
				</div>
			</div>
		</header>
	);
};

export default Header;