import React from "react";
import PropTypes from "prop-types";
import ActionButton from "./ActionButton";
import { showFormattedDate } from "../utils";

function NoteItemBody({
	id,
	title,
	body,
	createdAt,
	archived,
	onDelete,
	isLoading,
	onArchivedHandler,
}) {
	if (isLoading) {
		return <LoadingSpinner />;
	}
	return (
		<table>
			<thead>
				<tr>
					<th>Body</th>
					<th>Title</th>
					<th>Date</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr key={id}>
					<td className="center">{title}</td>
					<td className="center">{body}</td>
					<td className="center">{showFormattedDate(createdAt)}</td>
					<td className="center">
						{archived ? "archived" : "unarchived"}
					</td>
					<td className="center">
						<ActionButton
							id={id}
							onDelete={onDelete}
							onArchivedHandler={onArchivedHandler}
						/>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

NoteItemBody.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	onDelete: PropTypes.func.isRequired,
	onArchivedHandler: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default NoteItemBody;
