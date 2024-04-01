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
      className={`${className} px-5 py-3`}
    >
      {name}
    </Link>
  );
};

export default CTA;
