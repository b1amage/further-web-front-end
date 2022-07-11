import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { ForgotPasswordPage } from "./views/ForgotPasswordPage";
=======
import Toggle from "./utilities/Toggle";
>>>>>>> ef318c38bc64e5b28223cfbebbc3076e39ec0743
import HomePage from "./views/HomePage";
import { TypeOtp } from "./views/TypeOtp";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/forgot_password" element={<ForgotPasswordPage />} />
				<Route path="/forgot_password/otp" element={<TypeOtp />}/> 
			</Routes>
			<Toggle />
		</>
	);
}

export default App;
