import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const VerifyButton = ({ place, data, name }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validateData = () => {
    if (data === "1234") {
      navigate(`/forgot_password/otp/${place}/reset_password`);
    } else {
      setError("* Invalid OTP");
    }
  };

  return (
    <div className="mt-[80px]">
      <span className="text-primary-100 py-2 px-5 inline-block">{error}</span>
      <button
        className={`w-full h-[55px] mb-5 rounded-[32px] bg-gradient-to-l from-primary-100 to-primary-50 text-white font-semibold font-sourceSansPro text-lg`}
        onClick={validateData}
      >
        {name}
      </button>
    </div>
  );
};
