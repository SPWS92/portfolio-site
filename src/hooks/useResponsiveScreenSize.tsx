import { useEffect, useState } from "react";

const useResponsiveScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return screenWidth;
}

export default useResponsiveScreenSize;