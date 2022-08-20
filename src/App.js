import { Routes, Route } from "react-router-dom";

import { ForgotPasswordPage } from "./views/ForgotPasswordPage";

import Toggle from "./utilities/Toggle";

import HomePage from "./views/HomePage";
import { TypeOtp } from "./views/TypeOtp";
import { ResetPassword } from "./views/ResetPassword";
import { NotificationPage } from "./views/NotificationPage";
import UserDetailPage from "./views/UserDetailPage";
import MatchPage from "./views/MatchPage";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/match/:userId" element={<MatchPage />} />

				<Route path="/user" element={<UserDetailPage />} />
				<Route
					path="/forgot_password"
					element={<ForgotPasswordPage />}
				/>
				<Route path="/forgot_password/otp" element={<TypeOtp />} />
				<Route
					path="/forgot_password/otp/reset_password"
					element={<ResetPassword />}
				/>
				<Route
					path="/forgot_password/otp/reset_password/notification"
					element={<NotificationPage />}
				/>
			</Routes>
			<Toggle />
		</>
	);
}

export default App;
