import { useMutation } from "react-query";
import { api } from "@/utils/api";
import { SignupDto } from "@/interfaces/signup";
import { authRouter } from "@/constants/routers";
import { saveToken } from "@/utils/auth";
import { SNSLoginRes } from "@/interfaces/auth";

const fetchSignup = async (signupDto: SignupDto) => {
  const { data } = await api.post<SNSLoginRes>(authRouter.signup, signupDto);
  return data;
};

export const usePostSignup = (
  callbackFn: (nickname: string, profileImage: string) => void
) => {
  return useMutation((data: SignupDto) => fetchSignup(data), {
    onSuccess: (result) => {
      saveToken(result.data.accessToken, result.data.refreshToken);
      callbackFn(result.data.nickname, result.data.profileImage);
    },
  });
};
