import { Routes, Route } from "react-router-dom";

import { ForgotPasswordPage } from "./views/ForgotPasswordPage";

import Toggle from "./utilities/Toggle";

import HomePage from "./views/HomePage";
import { TypeOtp } from "./views/TypeOtp";
import { ResetPassword } from "./views/ResetPassword";
import { NotificationPage } from "./views/NotificationPage";
import UserDetailPage from "./views/UserDetailPage";
import MatchPage from "./views/MatchPage";
import AllMatchPage from "./views/AllMatchPage";
import SuccessMatchPage from "./views/SuccessMatchPage";
import ProfilePage from "./views/ProfilePage";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/match/:userId" element={<MatchPage />} />
				<Route path="/match/all/:userId" element={<AllMatchPage />} />
				<Route path="/user" element={<UserDetailPage />} />
				<Route
					path="/success/:userId1/:userId2"
					element={<SuccessMatchPage />}
				/>
				<Route path="/profile" element={<ProfilePage />} />

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
