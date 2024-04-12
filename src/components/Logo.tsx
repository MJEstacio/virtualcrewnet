import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/Logo.jpg"}
        width={500}
        height={500}
        className="w-20"
        alt="Logo"
        priority
      />
    </Link>
  );
};

export default Logo;
