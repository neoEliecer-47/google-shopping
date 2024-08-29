import { useEffect, useRef, useState } from "react";

export function useClickOutsideDetector() {
  const [isClickOutside, setIsClickOutside] = useState(false);
  const dropMenuRef = useRef(null);
  

  const handleOutsideClick = (event) => {
    if (dropMenuRef.current && !dropMenuRef.current.contains(event.target)) {
      setIsClickOutside(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { dropMenuRef, isClickOutside, setIsClickOutside };
}
