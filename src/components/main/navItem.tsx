"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  link: string;
  icon: string;
  iconDark: string;
  alt: string;
};

const NavItem = ({ title, link, icon, iconDark, alt }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={`flex rounded border-2 border-white p-2 transition-all hover:border-primary`}
    >
      <img className="w-6" src={isActive ? iconDark : icon} alt={alt} />
      <p
        className={`ml-1 hidden hover:text-gray-800 md:block ${
          isActive ? "font-bold text-primary" : ""
        }`}
      >
        {title}
      </p>
    </Link>
  );
};
export default NavItem;
