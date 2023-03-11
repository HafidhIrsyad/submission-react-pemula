import React, { useState } from "react";
import PropTypes from "prop-types";

function LoginInput({ login }) {
	const [input, setInput] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e, name) => {
		const value = e.target.value;
		setInput({ ...input, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login(input);
	};

	return (
		<form onSubmit={handleSubmit} className="login-input">
			<input
				type="email"
				placeholder="Email"
				value={input.email}
				onChange={(e) => handleChange(e, "email")}
			/>
			<input
				type="password"
				placeholder="Password"
				value={input.password}
				onChange={(e) => handleChange(e, "password")}
			/>
			<button>Masuk</button>
		</form>
	);
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
};

export default LoginInput;
