"use client"
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
function Electives() {
    const supabase = createClientComponentClient();
    const Courses = async()=>{
        const { data: courses } = await supabase.from("courses").select();
        return <pre>{JSON.stringify(courses, null, 2)}</pre>
    }
  return (
    <div>
      <header>Electives</header>
      <h1 className='font-semibold text-3xl text-t_color_1 text-center mt-3'>Art</h1>
      {Courses};
    </div>
  );
}

export default Electives;
