import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  KAKAO_AUTH_URL,
  KAKAO_AUTH_CLIENT_ID,
  KAKAO_AUTH_REDIRECT_URI,
  NAVER_AUTH_URL,
  NAVER_AUTH_CLIENT_ID,
  NAVER_AUTH_REDIRECT_URI,
  NAVER_AUTH_STATE,
  GOOGLE_AUTH_URL,
  GOOGLE_AUTH_CLIENT_ID,
  GOOGLE_AUTH_REDIRECT_URI,
  GOOGLE_AUTH_SCOPE,
} from "@/constants/biz";

const LoginPage = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="flex-row">
      <div className="pt-16 pl-4">
        <Image src={"/img/favicon.svg"} alt="logo" width={110} height={110} />
      </div>
      <div className="fixed bottom-0 pb-6" style={{ left: (width! - 320) / 2 }}>
        <div className="pb-2">
          <Link
            href={`${GOOGLE_AUTH_URL}?client_id=${GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=${GOOGLE_AUTH_SCOPE}`}
          >
            <Image
              src={"/img/login_apple.svg"}
              alt="login"
              width={320}
              height={48}
            />
          </Link>
        </div>
        <div className="flex justify-center pb-2">
          <Link
            href={`${NAVER_AUTH_URL}?client_id=${NAVER_AUTH_CLIENT_ID}&redirect_uri=${NAVER_AUTH_REDIRECT_URI}&response_type=code`}
          >
            <Image
              src={"/img/login_naver.svg"}
              alt="login"
              width={320}
              height={48}
            />
          </Link>
        </div>
        <div className="flex justify-center pb-2">
          <Link
            href={`${KAKAO_AUTH_URL}?client_id=${KAKAO_AUTH_CLIENT_ID}&redirect_uri=${KAKAO_AUTH_REDIRECT_URI}&response_type=code&state=${NAVER_AUTH_STATE}`}
          >
            <Image
              src={"/img/login_kakao.svg"}
              alt="login"
              width={320}
              height={48}
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            href={`${GOOGLE_AUTH_URL}?client_id=${GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=${GOOGLE_AUTH_SCOPE}`}
          >
            <Image
              src={"/img/login_google.svg"}
              alt="login"
              width={320}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
