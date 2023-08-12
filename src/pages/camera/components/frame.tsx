import useWindowDimensions from "@/hooks/useWindowDimensions";

const CameraFrame: React.FC = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className="absolute top-24 left-6"
      style={{
        width: width ? width - 48 : 0,
      }}
    >
      <div className="h-full">
        <div className="flex justify-between">
          <div className="border-t border-l rounded-tl-lg border-white w-[50px] h-[50px]" />
          <div className="border-t border-r rounded-tr-lg border-white w-[50px] h-[50px]" />
        </div>
        <div
          className="flex justify-between"
          style={{ marginTop: (height ? height : 0) - 362 }}
        >
          <div className="border-b border-l rounded-bl-lg border-white w-[50px] h-[50px]" />
          <div className="border-b border-r rounded-br-lg border-white w-[50px] h-[50px]" />
        </div>
      </div>
    </div>
  );
};
export default CameraFrame;
