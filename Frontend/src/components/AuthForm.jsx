import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Now set to null instead of ""

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null); // Reset error only when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log(isLogin ? "Logging in with" : "Signing up with", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API delay
    } catch (err) {
      setError("Authentication failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <button type="submit" className="mt-4 bg-pink-500 text-white px-4 py-2 rounded w-full" disabled={loading}>
            {loading ? (isLogin ? "Logging in..." : "Signing up...") : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-2 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="text-pink-500 font-semibold cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
