import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButton from "./components/auth-button";
export default function Home() {
  return (
    <main>
      <header>Home</header>
      <div className="home">
        <h1 className="home">Instructions</h1>
        <ul>
          <li>1.Sign In or Sign Up</li>
          <li>
            2.Navagate to the cattagory that corasponds to the class you are
            looking for
          </li>
        </ul>
      </div>
    </main>
  );
}
