import IconShot from "@/components/icons/shot";
import IconImage from "@/components/icons/image";
import IconHistory from "@/components/icons/history";
import IconFail from "@/components/icons/fail";
import IconDone from "@/components/icons/done";
import IconLoading from "@/components/icons/loading";
import { SHOT_STATUS } from "@/constants/biz";

type Props = {
  status: string;
  setStatus: (status: string) => void;
  capturedImage: () => void;
};

const CameraBottom: React.FC<Props> = ({
  status,
  setStatus,
  capturedImage,
}) => {
  const handleOnClick = () => {
    setStatus(SHOT_STATUS.SHOOTING);
    capturedImage();
  };
  return (
    <>
      <div className="fixed bottom-0 flex justify-between items-center w-full h-[88px] bg-white">
        <div className="flex justify-center pl-4">
          <IconImage width={32} height={32} />
        </div>
        <div className="flex items-center justify-center">
          {status === SHOT_STATUS.READY && (
            <IconShot width={48} height={48} onClick={() => handleOnClick()} />
          )}
          {status === SHOT_STATUS.SHOOTING && (
            <IconLoading className="animate-spin" width={48} height={48} />
          )}
          {status === SHOT_STATUS.DONE && <IconDone width={48} height={48} />}
          {status === SHOT_STATUS.FAIL && <IconFail width={48} height={48} />}
        </div>
        <div className="pr-4 cursor-pointer ">
          <IconHistory width={32} height={32} />
        </div>
      </div>
    </>
  );
};

export default CameraBottom;
