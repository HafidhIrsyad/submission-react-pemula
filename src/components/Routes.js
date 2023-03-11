import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import NoteDetail from "../pages/NoteDetail";
import ArchivedPage from "../pages/ArchivedPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
	{ path: "/", Component: HomePage },
	{ path: "/note/:id", Component: NoteDetail },
	{ path: "/add/note", Component: AddPage },
	{ path: "/note/archived", Component: ArchivedPage },
	{ path: "/register", Component: RegisterPage },
];

export default routes;
