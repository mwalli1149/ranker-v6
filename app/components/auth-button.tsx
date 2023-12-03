"use client";
import React from 'react'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
function AuthButton() {
    const supabase = createClientComponentClient();
    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github'
        })
      }
  return (
    <button onClick={handleSignIn}>Login</button>
  )
}

export default AuthButton