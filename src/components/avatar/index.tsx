import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const AvatarComponent: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="h-10 rounded-full"
    />
  );
};

export default AvatarComponent;
