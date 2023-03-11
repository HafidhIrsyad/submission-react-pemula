import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getUserLogged } from "../utils/api";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Navigation from "./Navigation";
import routes from "./Routes";
import { putAccessToken } from "../utils/api";

function NoteApp() {
	const [authUser, setAuthUser] = useState(null);
	const [initializing, setInitializing] = useState(true);

	async function onLoginSuccess({ accessToken }) {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();

		setAuthUser(data);
	}

	const onLogout = () => {
		setAuthUser(null);

		putAccessToken("");
	};

	useEffect(() => {
		getUserLogged().then(({ data }) => {
			setAuthUser(data);
			setInitializing(false);
		});
	}, []);

	if (initializing) {
		return null;
	}

	if (authUser == null) {
		return (
			<div className="note-app">
				<header className="note-app__header">
					<h1>Note App</h1>
					<Navigation logout={() => {}} name="" authUser={null} />
				</header>
				<main>
					<Routes>
						<Route
							path="/*"
							element={
								<LoginPage loginSuccess={onLoginSuccess} />
							}
						/>
						<Route path="/register" element={<RegisterPage />} />
					</Routes>
				</main>
			</div>
		);
	}

	return (
		<div className="note-app">
			<header className="note-app__header">
				<h1>Note App</h1>
				<Navigation
					logout={onLogout}
					name={authUser.name}
					authUser={authUser}
				/>
			</header>
			<main>
				<Routes>
					{routes.map((route, i) => {
						const { path, Component } = route;
						return (
							<Route
								key={i}
								path={path}
								element={<Component />}
							/>
						);
					})}
				</Routes>
			</main>
		</div>
	);
}

export default NoteApp;
