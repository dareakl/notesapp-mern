import React from "react";

const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Your Name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="******" required />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
