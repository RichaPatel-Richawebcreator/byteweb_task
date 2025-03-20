import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main-div">
      <div className="flex items-center justify-center min-vh-25 bg-img">
        <form onSubmit={handleSignUp} className="p-10 max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-blue-600">SIGN UP</h1>
          <p>Enter your email and password to register</p>
          <div className="py-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className="input-style mb-2 w-full p-2 border rounded"
            />
          </div>
          <div className="py-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-style mb-2 w-full p-2 border rounded"
            />
          </div>
          <div className="py-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-style mb-4 w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white w-full py-2 rounded-lg cursor-pointer"
          >
            Sign Up
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
            Already have an account ?{" "}
            <a href="/signin" className="text-blue-500 underline">
              SIGN IN
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
