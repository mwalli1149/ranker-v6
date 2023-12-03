import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButton from "./components/auth-button";
export default function Home() {
  return (
    <main>
      <AuthButton />
      Home
    </main>
  );
}
