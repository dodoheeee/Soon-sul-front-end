import { useState, useEffect, useRef } from "react";

interface WindowDimensions {
  width: number | undefined;
  height: number | undefined;
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  });

  const windowRef = useRef<Window | null>(null);

  useEffect(() => {
    windowRef.current = window;
    function handleResize() {
      if (windowRef.current) {
        setWindowDimensions({
          width: windowRef.current.innerWidth,
          height: windowRef.current.innerHeight,
        });
      }
    }

    if (windowRef.current) {
      windowRef.current.addEventListener("resize", handleResize);
      setWindowDimensions({
        width: windowRef.current.innerWidth,
        height: windowRef.current.innerHeight,
      });
    }

    return () => {
      if (windowRef.current) {
        windowRef.current.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
