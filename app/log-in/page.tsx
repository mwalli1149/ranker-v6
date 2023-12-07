//Not Ready For use experimenting
"use client";
import { useState } from "react";
import React from "react";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='sign'>
      <div className='sign-2'>
      <label className="sign">Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
        setUsername(e.currentTarget.value);
        }}
      />
      </div>
      <div className='sign-2'>
      <label className="mr-3.5 text-xl text-t_color_1">Password:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => {
        setPassword(e.currentTarget.value);
        }}
      />
      </div>
      <button>Sign In</button>
    </div>
  );
};

export default LogIn;
