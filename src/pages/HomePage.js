import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import NotetList from "../components/NotetList";
import SearchBar from "../components/SearchBar";
import { deleteNote, getActiveNotes, archiveNote } from "../utils/api";

function HomePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(true);
	const [notes, setNotes] = useState([]);
	const [keyword, setKeyword] = useState(() => {
		return searchParams.get("keyword") || "";
	});

	useEffect(() => {
		getActiveNotes().then(({ data }) => {
			setNotes(data);
			setIsLoading(false);
		});
	}, []);

	const onDeleteHandler = async (id) => {
		await deleteNote(id);
		const { data } = await getActiveNotes();
		setNotes(data);
	};

	const onArchivedHandler = async (id) => {
		await archiveNote(id);
		const { data } = await getActiveNotes();
		setNotes(data);
	};

	const onKeywordChangeHandler = (keyword) => {
		setKeyword(keyword);
		setSearchParams({ keyword });
	};

	const filteredContacts = notes.filter((note) => {
		return note.title.toLowerCase().includes(keyword.toLowerCase());
	});

	return (
		<section>
			<div className="add-notes">
				<h2>Note List</h2>
				<div className="btn-pages">
					<Link to="/add/note" className="btn-add">
						<p>Add Notes</p>
					</Link>
					<Link to="/note/archived" className="btn-achieved">
						<p>Archived Page</p>
					</Link>
				</div>
			</div>
			<SearchBar
				keyword={keyword}
				keywordChange={onKeywordChangeHandler}
			/>
			<NotetList
				notes={filteredContacts}
				onDelete={onDeleteHandler}
				isLoading={isLoading}
				onArchivedHandler={onArchivedHandler}
			/>
		</section>
	);
}

export default HomePage;
