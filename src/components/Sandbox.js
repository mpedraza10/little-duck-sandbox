"use client";

// Imports
import { useState } from "react";
import CodeEditor from "./CodeEditor";
import axios from "axios";

// Styles
import styles from "@/styles/Sandbox.module.css";

const Sandbox = () => {
	const [code, setCode] = useState(
		`program BasicProgram;

main
{
    print("Hello World!");
}
end`
	);
	const [result, setResult] = useState("");
	const api = process.env.SERVER_API || "http://127.0.0.1:5000";

	const handleCompile = async () => {
		// Clear the result
		setResult("");

		try {
			const response = await axios.post(`${api}/compile`, {
				code,
			});
			setResult(response.data.result.join("\n"));
		} catch (error) {
			setResult(error.response.data.error);
		}
	};

	return (
		<section className={styles.content}>
			<div className={styles.code}>
				<h3>Code Editor</h3>
				<CodeEditor code={code} setCode={setCode} />
				<button className={styles.compileBtn} onClick={handleCompile}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
						/>
					</svg>
				</button>
			</div>
			<div className={styles.output}>
				<h3>Output:</h3>
				<pre className={styles.pre}>{result}</pre>
			</div>
		</section>
	);
};

export default Sandbox;
