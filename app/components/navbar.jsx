import React from "react";
import  {useUser}  from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Sarabun } from "next/font/google";
const sarabun = Sarabun({ subsets: ["latin"], weight: "400" });

function Navbar() {
  const user = true;
  if(!user){
  return (
    <div className="flex w-full h-[5vh] bg-b_color_2 items-center justify-between text-2xl">
      {/*Things that allways show up*/}
      {/*Home Button*/}
      <div className="font-bold">
        <Link href="/">RHS Course Ranker</Link>
      </div>
      {/*Only show up when not logged in*/}
      {/*login and sign up buttons*/}
      <div className="flex ">
        {/* Sign In Button */}
        if(supabase==)
        <div className="pr-2">
          <Link href="login">Sign In</Link>
        </div>
        {/* Sign Up Button */}
        <div className="pr-2">
          <Link href="/sign-up">Sign Up</Link>
        </div>
        <div>
        <form action="/auth/logout" method="post">
        <button formAction="/auth/logout">Sign Out</button>
          </form>
        </div>
      </div>
    </div>
  );
  }
}

export default Navbar;
