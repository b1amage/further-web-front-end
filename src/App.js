import { Routes, Route } from "react-router-dom";

import { ForgotPasswordPage } from "./views/ForgotPasswordPage";

import Toggle from "./utilities/Toggle";

import HomePage from "./views/HomePage";
import { TypeOtp } from "./views/TypeOtp";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/forgot_password"
					element={<ForgotPasswordPage />}
				/>
				<Route path="/forgot_password/otp" element={<TypeOtp />} />
			</Routes>
			<Toggle />
		</>
	);
}

export default App;
