import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main-div">
      <div className="signin-bg">
        <div className="flex items-center justify-end">
          <form onSubmit={handleSignIn} className=" p-10  w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">SIGN IN</h2>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-style mb-2 w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-style mb-4 w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white w-full py-2 rounded-lg"
            >
              Sign In
            </button>
            <div className="flex justify-around align-center m-6">
              <button className="rounded-full text-white p-2 grd-bg cursor-pointer">
                <FaInstagram />
              </button>
              <button className="rounded-full text-white p-2 grd-bg cursor-pointer">
                <FaFacebook />
              </button>
              <button className="rounded-full text-white p-2 grd-bg cursor-pointer">
                <FaGoogle />
              </button>
              <button className="rounded-full text-white p-2 grd-bg cursor-pointer">
                <FaTwitter />
              </button>
            </div>
            <p className="text-center mt-4">
              Don't have an account ?
              <a href="/signup" className="text-blue-500 underline">
                SIGN UP
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
