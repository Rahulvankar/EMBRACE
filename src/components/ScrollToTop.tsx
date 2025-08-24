import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   // always scroll to top
  }, [pathname]); // runs every time the route changes

  return null; // doesn't render anything
};

export default ScrollToTop;
