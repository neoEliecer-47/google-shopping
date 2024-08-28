import { useEffect, useRef, useState } from "react";

export function useClickOutsideDetector() {
  const [isOpenMenu, setIsOpenMenu] = useState(null);
  const dropMenuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropMenuRef.current && !dropMenuRef.current.contains(event.target)) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { dropMenuRef, isOpenMenu };
}
