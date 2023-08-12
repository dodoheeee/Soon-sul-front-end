import AvatarComponent from "@/components/avatar";
interface Props {
  src: string;
  reviewCount?: number;
  nickname?: string;
}

const Profile: React.FC<Props> = ({
  src = "",
  reviewCount = 0,
  nickname = "",
}) => {
  return (
    <div className="flex items-center pb-4">
      <div className="pr-2 ">
        <AvatarComponent size={40} src={src} alt={""} />
      </div>
      <div>
        <div className="text-xs font-bold">{nickname}</div>
        <div className="text-gray-600 la-2">{reviewCount}개의 리뷰</div>
      </div>
    </div>
  );
};

export default Profile;
