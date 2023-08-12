import { useEffect } from "react";

type SignupModalProps = {
  isOpen: boolean;
  closeModal: (value: boolean) => void;
  children?: React.ReactNode;
  rounded?: boolean;
};

const BottomModal: React.FC<SignupModalProps> = ({
  isOpen,
  closeModal,
  children,
  rounded = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <>
      {isOpen ? (
        <>
          <div className="fixed inset-0 z-10 flex items-end overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-[#000000] bg-opacity-60">
            <div className="relative w-full max-w-2xl mx-auto">
              <div
                className="relative flex flex-col w-full bg-white border-0 shadow-lg outline-none focus:outline-none"
                style={{ borderRadius: rounded ? "16px" : "" }}
              >
                {children}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default BottomModal;
