"use client";

// React imports
import { useState, useEffect } from "react";

// Monaco editor imports
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
	const [isMobile, setIsMobile] = useState(false);

	const handleEditorChange = (value, e) => {
		setCode(value);
	};

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
		<div style={{ width: "100%" }}>
			<Editor
				height={isMobile ? "40vh" : "80vh"}
				theme="vs-dark"
				value={code}
				onChange={handleEditorChange}
				options={{
					selectOnLineNumbers: true,
					tabSize: 4,
					insertSpaces: true,
					automaticLayout: true,
				}}
			/>
		</div>
	);
};

export default CodeEditor;
