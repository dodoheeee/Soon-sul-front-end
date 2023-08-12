import MenuBottom from "@/components/menu/bottom";

export type BasicProps = {
  children: React.ReactNode;
};

const BottomMenu: React.FC<BasicProps> = ({ children }) => {
  return (
    <div
      data-layout="bottomMenu"
      className="flex justify-center w-full mx-auto bg-white"
    >
      <div className="max-w-2xl">{children}</div>
      <MenuBottom />
    </div>
  );
};

export default BottomMenu;
