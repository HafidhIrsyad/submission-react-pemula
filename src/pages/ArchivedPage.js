import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FiDelete, FiArchive } from "react-icons/fi";
import { BiDetail } from "react-icons/bi";
import LoadingSpinner from "../components/LoadingSpinner";
import { getArchivedNotes, unarchiveNote, deleteNote } from "../utils/api";
import { showFormattedDate } from "../utils/index";

const ArchivedPage = () => {
	const [archived, setArchived] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const onDeleteHandler = async (id) => {
		await deleteNote(id);
		const { data } = await getArchivedNotes();
		setArchived(data);
	};

	const onUnArchivedHandler = async (id) => {
		await unarchiveNote(id);
		const { data } = await getArchivedNotes();
		setArchived(data);
	};

	useEffect(() => {
		getArchivedNotes().then(({ data }) => {
			setArchived(data);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<section>
			<h2>Archived Page</h2>
			<div className="add-notes">
				<div className="btn-pages">
					<Link to="/" className="btn-back">
						<BiArrowBack /> <p>Back</p>
					</Link>
				</div>
			</div>
			{archived.length > 0 ? (
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
						{archived &&
							archived.map((acv, i) => (
								<tr key={i}>
									<td>{acv.title}</td>
									<td className="center">{acv.body}</td>
									<td className="center">
										{showFormattedDate(acv.createdAt)}
									</td>
									<td className="center">
										{acv.archived
											? "archived"
											: "unarchived"}
									</td>
									<td className="center">
										<div className="button">
											<button
												className="note-item__archived"
												onClick={() =>
													onDeleteHandler(acv.id)
												}
											>
												<FiDelete />
											</button>
											<Link
												to={`/note/${acv.id}`}
												className="note-item__detail"
											>
												<BiDetail />
											</Link>
											<button
												className="note-item__archived"
												onClick={() =>
													onUnArchivedHandler(acv.id)
												}
											>
												<FiArchive />
											</button>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			) : (
				<p className="nill">Tidak ada Catatan Archived </p>
			)}
		</section>
	);
};

export default ArchivedPage;
