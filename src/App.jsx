import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layouts/main.layout";
import Home from "./pages/Home";
import AstronomyPicture from "./pages/AstronomyPicture";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import RoverPage from "./pages/RoverPage";
import NasaEpicViewer from "./pages/EpicPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<HomeLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/marsphotos" element={<RoverPage />} />
					<Route path="/astrophotos" element={<AstronomyPicture />} />
					<Route path="/epicphotos" element={<NasaEpicViewer />} />
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
