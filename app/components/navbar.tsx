import React from "react";
import Link from "next/link";
import { Sarabun } from "next/font/google";
const sarabun = Sarabun({ subsets: ["latin"], weight: "400" });

function Navbar() {
  return (
    <nav className="flex w-full h-[5vh] bg-b_color_2 items-center justify-between text-2xl">
      {/*Things that allways show up*/}
      {/*Home Button*/}
      <div className="font-bold">
        <Link href="/">RHS Course Ranker</Link>
      </div>
      {/*Only show up when not logged in*/}
      {/*login and sign up buttons*/}
      <div className="flex ">
        {/* Sign In Button */}
        <div className="pr-2">
          <Link href="sign-in">Sign In</Link>
        </div>
        {/* Sign Up Button */}
        <div className="pr-2">
          <Link href="/sign-up">Sign Up</Link>
        </div>
        <div>
          <Link href="/logout">out</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
