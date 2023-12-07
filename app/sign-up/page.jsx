//Not Ready For use experimenting
"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import React from "react";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();
  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log("username-" + username + "\npassowrd-" + password);
    await supabase.auth.signUp({
      email: username,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  };

  return (
    <div className="sign">
      <div className="sign-2">
        <label className="sign">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
        />
      </div>
      <div className="sign-2">
        <label className="mr-3.5 text-xl text-t_color_1">Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </div>
      <button onClick={handleSignUp}>Sign In</button>
    </div>
  );
};

export default SignUp;
