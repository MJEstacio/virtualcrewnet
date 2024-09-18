import Image from "next/image";
import Link from "next/link";

const Logo2 = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/Logo2.jpg"}
        width={500}
        height={500}
        className="w-28"
        alt="Logo"
        priority
      />
    </Link>
  );
};

export default Logo2;
