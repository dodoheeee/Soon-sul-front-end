import HeaderComponent from "@/components/header";
import { useRouter } from "next/router";
import Profile from "./components/profile";
import Menu from "./components/menu";
import Divider from "../detail/components/divider";

const Mypage: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <HeaderComponent
        title={"마이페이지"}
        share={false}
        onClick={() => router.push("/main")}
      />
      <div className="pt-12" />
      <Profile />
      <Menu />
      <Divider />
      <div className="pt-4 pl-4 border-b border-gray-300 b-3">서비스 이용</div>
      <div className="pt-1 pl-4 font-bold">문의하기</div>
    </>
  );
};

export default Mypage;
