import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to MenuMate</h1>
      <p className="text-gray-600 mb-8 text-center">Your ultimate companion for exploring delicious meals!</p>

      <div className="grid gap-6 w-full max-w-md">
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold">Already have an account?</h2>
          <p className="text-gray-600 mt-2 mb-4">Log in to access your cart, orders, and personalized recommendations.</p>

          <div className="flex items-center gap-2">
            <Link to="/login" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Log In
            </Link>
            <span>or</span>
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold">New to MenuMate?</h2>
          <p className="text-gray-600 mt-2 mb-4">Create an account and start exploring our menu.</p>
          <Link to="/signup" className="block px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Sign Up
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold">Just Hungry?</h2>
          <p className="text-gray-600 mt-2 mb-4">Browse our menu without signing in.</p>
          <Link to="/menu" className="block px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
            Continue without account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
