import { Routes, Route } from "react-router-dom";

import { ForgotPasswordPage } from "./views/ForgotPasswordPage";

import Toggle from "./utilities/Toggle";

import HomePage from "./views/HomePage";

import { ResetPassword } from "./views/ResetPassword";
import { NotificationPage } from "./views/NotificationPage";
import UserDetailPage from "./views/UserDetailPage";
import { OtpPage } from "./views/OtpPage";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/user" element={<UserDetailPage />} />
				<Route path="/forgot_password" element={<ForgotPasswordPage />} />
				<Route path="/forgot_password/otp/:place" element={<OtpPage />}/> 
				<Route path="/forgot_password/otp/:place/reset_password" element={<ResetPassword />}/> 
				<Route path="/forgot_password/otp/:place/reset_password/notification" element={<NotificationPage />}/> 
			</Routes>
			<Toggle />
		</>
	);
}

export default App;
