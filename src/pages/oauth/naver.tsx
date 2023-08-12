import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { authRouter } from "@/constants/routers";
import { SNSLoginRes } from "@/interfaces/auth";
import { saveToken } from "@/utils/auth";
import useUserStore from "@/store/user";
const NaverLogin = () => {
  const router = useRouter();
  const { code } = router.query;
  const { setUserInfo } = useUserStore();
  const fetchNaverLogin = async () => {
    try {
      const res = await api.get<SNSLoginRes>(authRouter.naverLogin, {
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      fetchNaverLogin();
    }
  }, [code]);

  return <></>;
};

export default NaverLogin;
