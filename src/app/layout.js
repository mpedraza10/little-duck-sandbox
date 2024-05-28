// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Styles
import "../styles/globals.css";

// Font
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Little Duck Sandbox",
	description:
		"Test the great little duck programming languege in this sandbox!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
