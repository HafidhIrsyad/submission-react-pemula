import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { showFormattedDate } from "../utils/index";
import { getArchivedNotes } from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";

const ArchivedPage = () => {
	const [archived, setArchived] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
