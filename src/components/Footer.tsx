import React from "react";
import { Link } from "react-router-dom";

export interface FooterLink {
  name: string;
  path: string;
}

interface FooterProps {
  links: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-10" alt="Logo" />
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:underline me-4 md:me-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto " />
        <span className="block text-sm text-white sm:text-center font-semibold">
          © {currentYear} <a href="/" className="hover:underline">Lynx3PL™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
