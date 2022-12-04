import React, { useState } from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Transition } from "@headlessui/react";
import { NavLinks } from "./NavLinks";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="navbar-site-area flex-shrink-0">
            <SportsEsportsIcon
              sx={{
                width: 46,
                height: 46,
                color: "white",
              }}
            />
            <span className="navbar-title">Konsolya.com</span>
          </div>

          <div className="navbar-links hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NavLinks.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.slug}
                    className={`navbar-item ${item.color} hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="navbar-account-area">
            <span className="navbar-title">Konsolya.com</span>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Mobile Navigation Menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NavLinks.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.slug}
                    className={`${item.color} ${
                      isOpen && "block"
                    } hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
