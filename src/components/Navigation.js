import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome, FiLogOut } from "react-icons/fi";
import ToggleTheme from "./ToggleTheme";

function Navigation({ logout, name, authUser }) {
	if (authUser == null) {
		return (
			<nav className="navigation">
				<ul>
					<li>
						<Link to="/">
							<FiHome />
						</Link>
					</li>
				</ul>
			</nav>
		);
	}

	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to="/">
						<FiHome />
					</Link>
				</li>
				<li>
					<ToggleTheme />
				</li>
				<li>
					<Link onClick={logout}>
						{name} <FiLogOut />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

Navigation.propTypes = {
	logout: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	authUser: PropTypes.object,
};

export default Navigation;
