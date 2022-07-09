import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
