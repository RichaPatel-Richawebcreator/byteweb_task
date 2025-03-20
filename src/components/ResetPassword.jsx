import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Reset email sent!");
      navigate("/signin");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
        <input
          className="border p-2 w-full mb-4"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={handleReset}
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
