import { useEffect, useState } from "react";

/*
 * note(origin)
 * thats how get the origin link
 * */
const useOrigin = () => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return origin;
};

export default useOrigin;
