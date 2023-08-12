import HeaderComponent from "@/components/header";
import { useRouter } from "next/router";
import { SVGProps } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { colors } from "@/constants/design";
import { useState, useEffect, useRef } from "react";
import { api } from "@/utils/api";
import useUserStore from "@/store/user";
import BottomButtom from "@/components/buttons/bottomButton";

const IconProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#717171"
      d="M18 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 15c6.63 0 12 2.685 12 6v3H6v-3c0-3.315 5.37-6 12-6Z"
    />
  </svg>
);
const UpdateProfilePage: React.FC = () => {
  const router = useRouter();
  const { userInfo } = useUserStore();
  const [nickname, setNickname] = useState(userInfo.nickname);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState(colors.neutral);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState(
    "*한번 바꾼 닉네임은 2주후에 가능합니다."
  );

  useEffect(() => {
    if (nickname !== userInfo.nickname) {
      if (nickname.length < 2) {
        setColor(colors.error);
        setMessage("*닉네임은 두글자부터 가능합니다.");
        setDisabled(true);
      } else {
        api
          .get<{
            code: string;
            data: boolean;
            message: string;
            status: number;
          }>("/user/nickname/check", { nickname })
          .then((res) => {
            if (res.data?.data) {
              setColor(colors.primary);
              setMessage("*사용 가능한 닉네임입니다.");
              setDisabled(false);
            } else {
              setColor(colors.error);
              setMessage("*이미 사용중인 닉네임입니다.");
              setDisabled(true);
            }
          });
      }
    }
  }, [nickname]);
  return (
    <>
      <HeaderComponent
        title={"프로필 수정"}
        share={false}
        onClick={() => router.push("/mypage")}
      />
      <div className="pt-12" />
      {/* photo 영역 */}
      <div className="flex justify-center pt-4">
        <div className="w-20 h-20 rounded-full bg-[#D9D9D9] flex items-center justify-center relative">
          <IconProfile />
          <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary">
            <EditIcon sx={{ color: "white", fontSize: 15 }} />
          </div>
        </div>
      </div>
      {/* 닉네임 영역 */}
      <div className=" pt-[34px] px-4">
        <div className="font-bold  text-[14px] pb-1"> 닉네임</div>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full h-12 p-4 text-gray-400 border border-gray-400 rounded-lg la-2 focus:outline-none"
          placeholder="닉네임을 입력해주세요."
        />
        <div className="pt-2 la-2" style={{ color: color }}>
          {message}
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <BottomButtom text="저장" disabled={disabled} />
      </div>
    </>
  );
};

export default UpdateProfilePage;
