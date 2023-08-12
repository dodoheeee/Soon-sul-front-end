import { colors } from "@/constants/design";
import ImageIcon from "@mui/icons-material/Image";
import EditIcon from "@mui/icons-material/Edit";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";

const Menu: React.FC = () => {
  const router = useRouter();
  return (
    <div className="p-4 ">
      <div className="flex justify-center mb-2">
        <div className="border border-gray-400 rounded-lg w-[160px] h-[84px] mr-2">
          <div className="flex items-center justify-center h-full">
            <div onClick={() => router.push("/mypage/history")}>
              <div className="flex justify-center ">
                <ImageIcon sx={{ color: colors.primary }} />
              </div>
              <div className=" b-2">사진 히스토리</div>
            </div>
          </div>
        </div>
        <div className="border border-gray-400 rounded-lg w-[160px] h-[84px]">
          <div className="flex items-center justify-center h-full">
            <div onClick={() => router.push("/mypage/evaluation")}>
              <div className="flex justify-center">
                <EditIcon sx={{ color: colors.primary }} />
              </div>
              <div className=" b-2">평가</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="border border-gray-400 rounded-lg w-[160px] h-[84px] mr-2">
          <div className="flex items-center justify-center h-full">
            <div onClick={() => router.push("/mypage/bookmark")}>
              <div className="flex justify-center ">
                <BookmarkIcon sx={{ color: colors.primary }} />
              </div>
              <div className=" b-2">스크랩</div>
            </div>
          </div>
        </div>
        <div className="border border-gray-400 rounded-lg w-[160px] h-[84px]">
          <div className="flex items-center justify-center h-full">
            <div onClick={() => router.push("/mypage/jjim")}>
              <div className="flex justify-center ">
                <FavoriteIcon sx={{ color: colors.primary }} />
              </div>
              <div className="text-center b-2">찜</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
