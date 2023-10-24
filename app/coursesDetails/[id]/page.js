"use client";
import CoursesDetails from "@/components/CoursesDetails";
import React, { Suspense } from "react";

function page({ params }) {
  
  return (
    <>
     
        <CoursesDetails id={params.id} />
    </>
  );
}

export default page;
