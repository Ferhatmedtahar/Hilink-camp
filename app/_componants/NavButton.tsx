"use client";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { NAV_LINKS } from "../_constants";
import { useOpen } from "./OpenContext";
export default function NavButton() {
  const { isOpen, setIsOpen } = useOpen();

  return (
    <div
      className={`${isOpen && "z-50 h-[40vh] w-72 overflow-hidden rounded-sm bg-green-100"} relative inline-block cursor-default px-6 lg:hidden`}
    >
      <button onClick={() => setIsOpen((c) => !c)}>
        {isOpen ? (
          <MdClose
            className="absolute right-2 top-2 inline-block cursor-pointer text-gray-50 lg:hidden"
            size={32}
          />
        ) : (
          <Image
            src="menu.svg"
            alt="menu image"
            height={32}
            width={32}
            className="absolute right-2 top-2 inline-block cursor-pointer lg:hidden"
          />
        )}
      </button>
      {isOpen && (
        <div className="flex w-72 flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`regular-24 block border-gray-20 px-1 py-2 text-center text-gray-50 transition-all duration-200 hover:font-bold hover:text-gray-800`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
