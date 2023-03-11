import React from "react";
import { ThemeConsumer } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

function ToggleTheme() {
	return (
		<ThemeConsumer>
			{({ theme, toggleTheme }) => {
				return (
					<Link onClick={toggleTheme}>
						{theme === "light" ? <FaMoon /> : <FaSun />}
					</Link>
				);
			}}
		</ThemeConsumer>
	);
}

export default ToggleTheme;
