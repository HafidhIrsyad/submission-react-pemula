import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import LoadingSpinner from "../components/LoadingSpinner";
import { getNote } from "../utils/api";
import { showFormattedDate } from "../utils/index";

function NoteDetail() {
	const { id } = useParams();
	const [detail, setDetail] = useState({});
	const [isLoading, setIsLoding] = useState(true);

	useEffect(() => {
		getNote(id).then(({ data }) => {
			setDetail(data);
			setIsLoding(false);
		});
	}, [id]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<section>
			<h2>Note Details</h2>
			<div className="add-notes">
				<div className="btn-pages">
					<Link to="/" className="btn-back">
						<BiArrowBack /> <p>Back</p>
					</Link>
				</div>
			</div>
			<div className="note-item">
				<div className="note-item__body">
					<h3 className="note-item__title">{detail?.title}</h3>
					<p className="note-item__username">{detail?.body}</p>
					<p className="note-item__username">
						{showFormattedDate(detail?.createdAt)}
					</p>
					<p className="note-item__username">
						{detail?.archived ? "Archived" : "Unarchieved"}
					</p>
				</div>
			</div>
		</section>
	);
}

export default NoteDetail;
