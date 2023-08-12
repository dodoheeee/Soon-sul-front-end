import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { authRouter } from "@/constants/routers";
import { SNSLoginRes } from "@/interfaces/auth";
import useUserStore from "@/store/user";
import { saveToken } from "@/utils/auth";
const AppleLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  const { setUserInfo } = useUserStore();
  const fetchAppleLogin = async () => {
    try {
      const res = await api.get<SNSLoginRes>(authRouter.appleLogin, {
        code,
      });
      if (res.data.code) {
        if (res.data.code === "A001") {
          router.push(
            `/signup?oauthId=${res.data.data.oauthId}&oauthProvider=${res.data.data.oauthProvider}`
          );
        } else {
          saveToken(res.data.data.accessToken, res.data.data.refreshToken);
          setUserInfo({
            nickname: res.data.data.nickname,
            profileImage: res.data.data.profileImage,
          });
          router.push("/main");
        }
      }
      console.log(res.data.code);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      fetchAppleLogin();
    }
  }, [code]);

  return <></>;
};

export default AppleLogin;
