import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Impressum',
    href: '/impressum',
  },
  {
    title: 'Datenschutz',
    href: '/datenschutz',
  },
];

declare global {
  interface Window {
    openCookieSettings?: () => void;
  }
}

export default function FooterSection() {
  return (
    <footer className="py-6 md:py-12 bg-[#121a30] text-white relative z-10">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/"
          aria-label="go home"
          className="mx-auto block size-fit mb-4 md:mb-0"
        >
          <span className="text-xl sm:text-2xl font-bold" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Julin Design</span>
        </Link>

        <div className="my-6 md:my-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-gray-300 hover:text-white block duration-150 px-2 py-1"
            >
              <span>{link.title}</span>
            </Link>
          ))}
          <div>
            <button
              onClick={() => {
                if (window.openCookieSettings) {
                  window.openCookieSettings();
                }
              }}
              className="text-gray-300 hover:text-white bg-transparent border-none px-2 py-1 cursor-pointer duration-150 underline"
              aria-label="Cookie-Einstellungen öffnen"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>

        <span className="text-gray-400 block text-center text-xs sm:text-sm px-4">
          © {new Date().getFullYear()} Julin Design. Alle Rechte vorbehalten.
        </span>
      </div>
    </footer>
  );
}
