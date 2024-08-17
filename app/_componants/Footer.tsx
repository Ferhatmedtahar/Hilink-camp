import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../_constants";

export default function Footer() {
  return (
    <footer className="flexCenter mb-24">
      <div className="max-container padding-container relative flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="pb-10">
            <Image
              src="/hilink-logo.svg"
              height={29}
              width={74}
              alt="the hiLink logo"
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, i) => (
              <FooterColumn title={columns.title} key={i}>
                <ul className="regulat-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      href="/"
                      key={link}
                      className="transition-all duration-100 hover:text-gray-50"
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}{" "}
            <div className="">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex items-center gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regluar-14 flex gap-4">
                  {SOCIALS.links.map((social, i) => (
                    <Link href="/" key={i}>
                      <Image
                        src={social}
                        alt="social media image link"
                        height={28}
                        width={28}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
function FooterColumn({ children, title }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="bold-18 whitespace-nowrap">{title}</h3>
      {children}
    </div>
  );
}
