import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiDelete, FiArchive } from "react-icons/fi";
import { BiDetail } from "react-icons/bi";

function ActionButton({ id, onDelete, onArchivedHandler }) {
	return (
		<div className="button">
			<button className="note-item__delete" onClick={() => onDelete(id)}>
				<FiDelete />
			</button>
			<Link to={`/note/${id}`} className="note-item__detail">
				<BiDetail />
			</Link>
			<button
				className="note-item__archived"
				onClick={() => onArchivedHandler(id)}
			>
				<FiArchive />
			</button>
		</div>
	);
}

ActionButton.propTypes = {
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ActionButton;
