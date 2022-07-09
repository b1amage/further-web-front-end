import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<NavBar />
		</>
	);
}

export default App;
