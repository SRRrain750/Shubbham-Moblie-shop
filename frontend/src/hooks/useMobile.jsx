import React from "react";
import { useEffect, useState } from "react";

const useMobile = (brackpoint=768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < brackpoint);
  const handleResize = () => {
    const checkpoint = window.innerWidth < brackpoint;
    setIsMobile(checkpoint);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>{
         window.removeEventListener('resize', handleResize);
    }
    }, []);
  return { isMobile };
}   

export default useMobile;