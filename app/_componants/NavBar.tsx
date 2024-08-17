"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../_constants";
import Button from "./Button";
import NavButton from "./NavButton";
import { useOpen } from "./OpenContext";

export default function NavBar() {
  const { isOpen } = useOpen();
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5">
      {isOpen ? null : (
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={75} height={30} />
        </Link>
      )}

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 cursor-pointer rounded-sm p-2 pb-2 text-gray-50 transition-all duration-100 hover:bg-gray-10 hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button icon="/user.svg" variant="btn_dark_green" type="button">
          Login
        </Button>
      </div>
      <NavButton />
    </nav>
  );
}
