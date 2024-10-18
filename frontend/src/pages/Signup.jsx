import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border shadow p-6 w-88 bg-white">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2"
            >
              Signup
            </button>
            <p className="text-center">
              Already Have Account? <a href="">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
