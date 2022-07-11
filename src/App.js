import { Routes, Route } from "react-router-dom";
import Toggle from "./utilities/Toggle";
import HomePage from "./views/HomePage";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Toggle />
		</>
	);
}

export default App;
