//Not Ready For use experimenting
"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const supabase = createClientComponentClient();
  var error = "";
  const router = useRouter();
  const handleSignUp = async (event) => {
    event.preventDefault();
    var label = document.getElementById("displayError");
    if(username==""){
         label.innerHTML = " Please enter an email";
         return "";
    }
    if(password!=passwordCheck){
      
         label.innerHTML = " Passowrds do not match";
         return "";
    }
    //password not long enough
    if(password.length<8){
      error = "your password is too short"
    }
    console.log("username-" + username + "\npassowrd-" + password);
    await supabase.auth.signUp({
      email: username,
      password: password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    router.push("/");
  };

  return (
    //top level
    <body className="box-content flex">
      <div className="w-full h-[95vh] bg-transparent grid grid-cols-4 grid-rows-4">
        {/*coloring in grid for inside and makeing a new grid*/}
        <div className="col-start-2 col-span-2 row-start-2 row-span-2 ">
          <div className="grid w-full h-full grid-cols-2 grid-rows-4 ">
            {/* Email label */}
            <div className="inline-block rounded-tl-3xl col-span-1 row-span-1 bg-red-700 text-right align-bottom">
              <span className=" text-3xl font-bold  text-t_color_2">Email</span>
            </div>
            {/*email in */}
            <div className="col-span-1 row-span-1 rounded-tr-3xl bg-blue-700 ">
              <input
                className="bg-b_color_3 text-t_color_2 shadow-sm h-auto w-full text-3xl"
                type="text"
                placeholder="example@provider.com"
                value={username}
                onChange={(e) => {
                  setUsername(e.currentTarget.value);
                }}
              />
            </div>
            {/* Password label */}
            <div className="col-span-1 row-span-1 bg-green-700 text-right">
              <span className=" text-3xl font-bold  text-t_color_2">
                Password
              </span>
            </div>
            {/* Password Input */}
            <div className="col-span-1 row-span-1 bg-purple-700">
              <input
                className="bg-b_color_3 text-t_color_2 shadow-sm h-auto w-full text-3xl"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>
            {/* Confirm Password Label*/}
            <div className="col-span-1 row-span-1 bg-blue-700 text-right">
              <span className=" text-3xl font-bold  text-t_color_2">
                Confirm Password
              </span>
            </div>
            {/*confirm password input*/}
            <div className="col-span-1 row-span-1 bg-green-700">
              <input
                className="bg-b_color_3 text-t_color_2 shadow-sm h-auto w-full text-3xl"
                type="password"
                placeholder="Confirm Password"
                value={passwordCheck}
                onChange={(e) => {
                  setPasswordCheck(e.currentTarget.value);
                }}
              />
            </div>
            {/*bottom row*/}
            <div className="flex col-span-2 row-span-1 rounded-b-3xl bg-purple-700  items-center align-middle">
              {/*error dispaly*/}
              <label id="displayError"></label>
              {/* sign in button */}
              <button
                className="bg-b_color_3  rounded-full text-3xl font-bold text-t_color_2"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignUp;
