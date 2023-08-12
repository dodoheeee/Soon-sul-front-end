import { useRouter } from "next/router";
import IconBottomCamera from "@/components/icons/bottomCamera";
import IconSearch from "@/components/icons/search";
import IconUser from "@/components/icons/user";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const MenuBottom: React.FC = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <>
      <div className="fixed bottom-0 flex items-center w-full h-12 bg-white rounded-lg shadow-bottom">
        <div
          className="flex justify-center "
          style={{ width: ((width ? width : 0) - 72) / 2 }}
        >
          <IconSearch
            width={32}
            height={32}
            onClick={() => router.push("/search")}
          />
        </div>
        <div
          onClick={() => router.push("/camera")}
          className="mb-6 bg-gradient-to-br from-[#3CDBC0] via-[#3EB1C8] to-[#2D68C4] rounded-full w-[72px] h-[72px] flex justify-center items-center"
        >
          <IconBottomCamera width={40} height={40} />
        </div>
        <div className="">
          <div
            className="flex justify-center cursor-pointer "
            style={{ width: ((width ? width : 0) - 72) / 2 }}
          >
            <IconUser
              width={32}
              height={32}
              onClick={() => router.push("/mypage")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBottom;
