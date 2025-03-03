import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="form-container bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome to Radiant Skincare
        </h2>
        <p className="mt-2 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="text-pink-500 font-semibold cursor-pointer" onClick={toggleForm}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

        {isLogin ? (
          <form className="mt-6">
            <input
              type="email"
              className="input-field w-full p-2 border border-gray-300 rounded-lg mt-3"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="input-field w-full p-2 border border-gray-300 rounded-lg mt-3"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn w-full p-2 bg-pink-500 text-white rounded-lg mt-4 hover:bg-pink-600">
              Login
            </button>
          </form>
        ) : (
          <form className="mt-6">
            <input
              type="text"
              className="input-field w-full p-2 border border-gray-300 rounded-lg mt-3"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="input-field w-full p-2 border border-gray-300 rounded-lg mt-3"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="input-field w-full p-2 border border-gray-300 rounded-lg mt-3"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn w-full p-2 bg-pink-500 text-white rounded-lg mt-4 hover:bg-pink-600">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
