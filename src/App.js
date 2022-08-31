import { Routes, Route } from "react-router-dom";

import { ForgotPasswordPage } from "./views/ForgotPasswordPage";

import HomePage from "./views/HomePage";

import { ResetPassword } from "./views/ResetPassword";
import { NotificationPage } from "./views/NotificationPage";
import UserDetailPage from "./views/UserDetailPage";

import { OtpPage } from "./views/OtpPage";
import MatchPage from "./views/MatchPage";
import AllMatchPage from "./views/AllMatchPage";

import SuccessMatchPage from "./views/SuccessMatchPage";
import ProfilePage from "./views/ProfilePage";
import NotFoundPage from "./views/NotFoundPage";
import EditPage from "./views/EditPage";
import ChatPage from "./views/ChatPage";
import ProfileOption from "./components/profile/ProfileOption";
import SetupPage from "./views/SetupPage";
import SetupImagePage from "./views/SetupImagePage";
import AboutPage from "./views/AboutPage";

import { ChatDetails } from "./views/ChatDetails";
import { SelectInterest } from "./views/SelectInterest";
import { IdealMatch } from "./views/IdealMatch";

import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/match/:userId" element={<MatchPage />} />
				<Route path="/match/all/:userId" element={<AllMatchPage />} />
				<Route path="/user" element={<UserDetailPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />

				<Route
					path="/forgot_password"
					element={<ForgotPasswordPage />}
				/>
				<Route
					path="/forgot_password/otp/:place"
					element={<OtpPage />}
				/>
				<Route
					path="/forgot_password/otp/:place/reset_password"
					element={<ResetPassword />}
				/>
				<Route
					path="/forgot_password/otp/:place/reset_password/notification"
					element={<NotificationPage />}
				/>

				<Route path="/chat" element={<ChatPage />} />
				<Route path="/chat_details" element={<ChatDetails />} />
				<Route
					path="/success/:userId1/:userId2"
					element={<SuccessMatchPage />}
				/>
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/profile/edit" element={<EditPage />} />
				<Route path="/setup" element={<SetupPage />} />
				<Route path="/setup/img" element={<SetupImagePage />} />

				<Route path="/select_interest" element={<SelectInterest />} />
				<Route path="/select_interest/ideal_match" element={<IdealMatch />} />


				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<div className="hidden">
				<ProfileOption tooglable />
			</div>
		</>
	);
}

export default App;
