import { useRouter } from "next/router";
const Home: React.FC = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/auth/login"); // /는 스플래쉬 페이지로 활용
  }, 3000);

  return <>{/* /는 스플래쉬 페이지로 활용 */}</>;
};

export default Home;
