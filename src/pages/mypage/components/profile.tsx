import useUserStore from "@/store/user";
import Image from "next/image";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { colors } from "@/constants/design";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile: React.FC = () => {
  const { userInfo } = useUserStore();
  const { width } = useWindowDimensions();
  const router = useRouter();
  return (
    <div className="flex items-center p-4" style={{ width: width }}>
      {userInfo?.profileImage ? (
        <Image
          src={userInfo?.profileImage}
          width={48}
          height={48}
          alt={"profile"}
        />
      ) : (
        <AccountCircleIcon sx={{ color: colors.grey[400], fontSize: 48 }} />
      )}
      <div className="pl-2">
        <div className="text-base font-semibold text-gray-800">
          {userInfo?.nickname || "닉네임"}
        </div>
      </div>
      <div
        className="flex items-center pl-1"
        onClick={() => router.push("/mypage/updateProfile")}
      >
        <BorderColorIcon sx={{ color: colors.primary, fontSize: 15 }} />
      </div>
    </div>
  );
};

export default Profile;
