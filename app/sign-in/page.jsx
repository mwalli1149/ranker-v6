"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import React from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  const supabase = createClientComponentClient();
  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log("username-" + username + "\npassowrd-" + password);
    await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    })
    router.push('/')
  };
  return (
    <>
    <header>Log In</header>
      <div className="container">
        asdasdasd
      </div>
    </>
  );
};

export default SignIn;
