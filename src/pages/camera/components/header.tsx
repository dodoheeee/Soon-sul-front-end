import IconFlash from "@/components/icons/flash";
import IconClose from "@/components/icons/close";
import { useRouter } from "next/router";

const CameraHeader: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <div className="absolute z-10 left-5 top-3">
        <IconFlash width={24} height={24} />
      </div>
      <div
        onClick={() => router.push("/main")}
        className="absolute z-10 right-5 top-3"
      >
        <IconClose width={24} height={24} />
      </div>
    </div>
  );
};

export default CameraHeader;
