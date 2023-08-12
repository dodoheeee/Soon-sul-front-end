import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { authRouter } from "@/constants/routers";

const login = () => {
  const router = useRouter();
  const { code } = router.query;
  console.log(code);

  useEffect(() => {
    if (code) {
      api
        .get(authRouter.kakaoLogin, {
          code,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [code]);

  return <></>;
};

export default login;
