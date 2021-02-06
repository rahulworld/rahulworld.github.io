import { useLayoutEffect, useState, useEffect } from "react";

export function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);
  // For Server Side rendered we have to use
//     1. useEffect for not important loading
//     2. use Lazy loading
//     https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85

//   useLayoutEffect(() => {
//     function updateScreenSize() {
//       setScreenSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener("resize", updateScreenSize);
//     updateScreenSize();
//     return () => window.removeEventListener("resize", updateScreenSize);
//   }, []);
useEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  
  return screenSize;
}