export type CenteredProps = {
  children: React.ReactNode;
};

const Centered: React.FC<CenteredProps> = ({ children }) => (
  <div
    data-layout="centered"
    className="flex items-center justify-center w-full text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white"
  >
    <div className="px-4 py-6">{children}</div>
  </div>
);

export default Centered;
