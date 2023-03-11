import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import LoadingSpinner from "./LoadingSpinner";

function NoteLists({ notes, onDelete, isLoading, onArchivedHandler }) {
	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div>
			{notes.length > 0 ? (
				notes.map((note) => (
					<NoteItem
						isLoading={isLoading}
						key={note.id}
						id={note.id}
						onDelete={onDelete}
						onArchivedHandler={onArchivedHandler}
						{...note}
					/>
				))
			) : (
				<p className="nill">Tidak ada Catatan </p>
			)}
		</div>
	);
}

NoteLists.propTypes = {
	notes: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired,
	onArchivedHandler: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default NoteLists;
