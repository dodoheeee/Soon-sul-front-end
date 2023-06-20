export type BasicProps = {
  children: React.ReactNode;
};

const Basic: React.FC<BasicProps> = ({ children }) => (
  <div className="w-full max-w-xl mx-auto text-gray-900 bg-white ">
    <div className="">{children}</div>
  </div>
);

export default Basic;
