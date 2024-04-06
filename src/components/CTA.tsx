import Link from "next/link";

interface CTAProps {
  href: string;
  name: string;
  className?: string;
}

const CTA = ({ href, name, className }: CTAProps) => {
  return (
    <Link
      href={href}
      className={`${className} px-5 py-4 bg-white text-black duration-500  shadow-md  font-bold tracking-widest uppercase montserrat hover:text-white hover:bg-black border-2 border-white `}
    >
      {name}
    </Link>
  );
};

export default CTA;
