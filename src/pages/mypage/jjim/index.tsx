import HeaderComponent from "@/components/header";
import { useRouter } from "next/router";
const JJimPage: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <HeaderComponent
        title={"찜"}
        share={false}
        onClick={() => router.push("/mypage")}
      />
    </>
  );
};

export default JJimPage;
