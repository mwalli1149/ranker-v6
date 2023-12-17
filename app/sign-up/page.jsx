//Not Ready For use experimenting
"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
const SignUp = () => {
  return (
    //top level
    <form action="/auth/login" method="post">
      <div className="w-full h-[95vh] bg-transparent grid grid-cols-4 grid-rows-4">
        <div className="col-start-2 col-span-2 row-start-2 row-span-2 bg-red-600">
          <div className="grid w-full h-full grid-cols-2 grid-rows-4  ">
            <div className="col-span-1 row-span-1 bg-blue-600 inline-block text-right rounded-tl-3xl">
              <label htmlFor="email" className="text-5xl font-bold">
                Email
              </label>
            </div>
            <div className="col-span-1 row-span-1 bg-purple-50 inline text-left rounded-tr-3xl">
              <input
                name="email"
                className="bg-b_color_3 text-t_color_2 shadow-sm h-auto w-full text-3xl"
                placeholder="example@provider.com"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-orange-500 inline text-right ">
              <label className="text-5xl font-bold" htmlFor="password">
                Password
              </label>
            </div>
            <div className="col-span-1 row-span-1 bg-cyan-500 inline text-left ">
            <input type="password" name="password"className="bg-b_color_3 text-t_color_2 shadow-sm h-auto w-full text-3xl"
                placeholder="Your 8 or more character password" />
              </div>
            <div className="col-span-2 row-span-1 bg-lime-500 ">
            <button formAction="/auth/sign-up">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
