import { useEffect, useState } from "react";

const useResponsiveScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleWindowResize = () => setScreenWidth({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return screenWidth;
}

export default useResponsiveScreenSize;