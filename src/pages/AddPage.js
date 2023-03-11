import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";

function AddPage() {
	const navigate = useNavigate();

	function onAddNoteHandler(note) {
		addNote(note);
		navigate("/");
	}

	return (
		<section>
			<h2>Add Note</h2>
			<NoteInput addNote={onAddNoteHandler} />
		</section>
	);
}

export default AddPage;
