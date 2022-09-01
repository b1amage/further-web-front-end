import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const VerifyEmailPage = () => {
	const query = useQuery();
	const navigate = useNavigate();

	useEffect(() => {
		const saveToken = async () => {
			localStorage.setItem("token", query.get("token"));
		};

		saveToken();
		navigate("/setup");
	}, [query, navigate]);

	return <div className="page-container"></div>;
};

export default VerifyEmailPage;
