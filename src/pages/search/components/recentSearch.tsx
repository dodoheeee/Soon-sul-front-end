import LocalStorage from "@/utils/localStorage";

const RecentSearch: React.FC = () => {
  const recentSearch: string | null = LocalStorage.getItem("recentSearch");

  return <></>;
};

export default RecentSearch;
