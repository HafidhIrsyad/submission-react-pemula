import React, { useState, useEffect } from "react";
import NoteApp from "../components/NoteApp";
import { ThemeProvider } from "../context/ThemeContext";

export default function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	const toggleTheme = () => {
		setTheme((prevState) => {
			const newTheme = prevState === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);

			return newTheme;
		});
	};

	const themeContextValue = React.useMemo(() => {
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	useEffect(
		(prevState) => {
			if (prevState !== theme) {
				document.documentElement.setAttribute("data-theme", theme);
			}
		},
		[theme]
	);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, []);

	return (
		<ThemeProvider value={themeContextValue}>
			<NoteApp />
		</ThemeProvider>
	);
}
