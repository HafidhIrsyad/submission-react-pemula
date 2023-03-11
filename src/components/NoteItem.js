import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";

function NoteItem({
	id,
	title,
	body,
	createdAt,
	archived,
	onDelete,
	isLoading,
	onArchivedHandler,
}) {
	return (
		<div>
			<NoteItemBody
				id={id}
				title={title}
				body={body}
				createdAt={createdAt}
				archived={archived}
				onDelete={onDelete}
				isLoading={isLoading}
				onArchivedHandler={onArchivedHandler}
			/>
		</div>
	);
}

NoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	onDelete: PropTypes.func.isRequired,
	onArchivedHandler: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default NoteItem;
