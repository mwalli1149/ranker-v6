"use client"
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from 'react'
function Electives() {
  const [courseData, setCourseData] = useState([]);

    const supabase = createClientComponentClient();
    async function getCourseData() {
      let { data, error } = await supabase
        .from('courses')
        .select('*');
  
      setCourseData(data);
      console.log(courseData);
    }
  return (
    <div>
      <header>Electives</header>
      <h1 className='font-semibold text-3xl text-t_color_1 text-center mt-3'>Art</h1>
      {getCourseData}
      {(courseData)}
    </div>
  );
}

export default Electives;
