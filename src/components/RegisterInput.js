import React, { useState } from "react";
import PropTypes from "prop-types";

function RegisterInput({ register }) {
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e, name) => {
		const value = e.target.value;
		setInput({ ...input, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		register(input);
	};

	return (
		<form onSubmit={handleSubmit} className="register-input">
			<input
				type="name"
				placeholder="Name"
				value={input.name}
				onChange={(e) => handleChange(e, "name")}
			/>
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
			<button>Register</button>
		</form>
	);
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};

export default RegisterInput;
