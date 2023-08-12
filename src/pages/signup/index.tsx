import SelectAgeSex from "./components/selectAgeSex";
import AgreeTerms from "./components/agreeTerms";
import { useRouter } from "next/router";
import { SignupDto } from "@/interfaces/signup";
const SignupPage: React.FC = () => {
  const router = useRouter();
  const { oauthId, oauthProvider } = router.query;
  const oauthIdString = oauthId as string;
  const oauthProviderString = oauthProvider as string;

  return (
    <AgreeTerms oauthId={oauthIdString} oauthProvider={oauthProviderString} />
  );
};

export default SignupPage;
