//Not Ready For use experimenting
"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();
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
    router.push("/");
  };

  return (
    //top level
    <body className="box-border flex">
        <div className="w-1/2 h-1/2 justify-center bg-black ">test</div>
    </body>
  );
};
//     <div className="container bg-black h-screen w-full flex items-center	">
//       <div className="container bg-b_color_2 justify-center h-1/2 w-1/2 mx-auto">
//         <div className="grid gap-1 grid-cols-1 grid-rows-3">
//         <div className="justify-center flex-row">
//           <label className="text-t_color_2 flex-row">Email:</label>
//           <input
//             className="bg-b_color_3 text-t_color_2 shadow-sm"
//             type="text"
//             value={username}
//             onChange={(e) => {
//               setUsername(e.currentTarget.value);
//             }}
//           />
//         </div>
//         <label className="mr-3.5 text-xl text-t_color_1">Password:</label>
//         <input
//           type="text"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.currentTarget.value);
//           }}
//         />

//         <button className="bg-b_color_3 text-t_color_2 " onClick={handleSignUp}>
//           Sign In
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default SignUp;
