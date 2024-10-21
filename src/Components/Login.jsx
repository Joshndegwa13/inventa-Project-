import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { doSignInWithEmailAndPassword } from "../firebase/auth"; 
import { useAuth } from "../context/authcontext"; 

function Login() {
  const navigate = useNavigate(); 
  const { userLoggedIn, loading } = useAuth(); // Extract values from auth context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handles the email and password sign-in
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      await doSignInWithEmailAndPassword(email, password); 
      setEmail(""); 
      setPassword(""); 
      // Navigate to Products section upon successful login
      navigate('/products'); 
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSigningIn(false); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Log In</h3>
        <p className="text-sm mb-4 text-center">Welcome back! Please enter your details</p>

        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Enter Your Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="placeholder:text-black bg-transparent py-2 my-2 border-b border-black focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={isSigningIn}
            className="text-white bg-blue-500 py-2 my-4 w-full rounded hover:bg-purple-700 transition-colors duration-200"
          >
            {isSigningIn ? "Logging In..." : "Log In"}
          </button>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

          <div className="text-sm mt-4 text-center">
            <p className="mb-2">
              <a 
              href="#" 
              className="text-blue-600 hover:underline"
              onClick={() => navigate('/forgotpassword')}
              >Forgot Password?
              </a>
            </p>
            
            <p>
              Don't have an Account?{" "}
              <a 
                href="#" 
                className="text-blue-600 hover:underline"
                onClick={() => navigate('/register')} // Navigate to Registration form
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
