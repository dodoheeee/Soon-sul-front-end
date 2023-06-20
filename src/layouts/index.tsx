import { useEffect } from "react";
import { useRouter } from "next/router";
import Centered from "@/layouts/centered";
import Basic from "@/layouts/basic";
export type LayoutProps = {
  children: React.ReactNode;
};

const Layouts: React.FC<LayoutProps> = ({ children }) => {
  const config = {
    background: "light",
  };
  const { background } = config;

  useEffect(() => {
    const root = window.document.documentElement;
    const backgroundClass = background === "light" ? "dark" : "light";
    root.classList.remove(backgroundClass);
    root.classList.add(background);
  }, [background]);

  const router = useRouter();
  const { pathname } = router;

  switch (pathname) {
    case "/500":
      return <Centered>{children}</Centered>;
    case "/":
    case "/scheduleUpdate":
    case "/landing":
    case "/login-2":
    case "/login-3":
    case "/photo":
      return <>{children}</>;
    default:
      return <Basic>{children}</Basic>;
  }
};

export default Layouts;
