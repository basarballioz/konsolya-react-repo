import React, { useState } from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Transition } from "@headlessui/react";
import { NavLinks } from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/material/Button";
import Box, { BoxProps } from "@mui/material/Box";

function Nav() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [isOpen, setIsOpen] = useState(false);

  console.log(isTabletOrMobile);
  return (
    <nav className="bg-gray-800">
      <div
        className={`${
          isTabletOrMobile ? "mobile-navbar flex justify-between" : ""
        } max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
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
            <span
              className={`${
                isTabletOrMobile ? "hidden navbar-title" : "navbar-title"
              }`}
            >
              Konsolya.com
            </span>
          </div>
        </div>
        <div className="flex md:hidden my-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
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
        enterTo="menu-height opacity-100 scale-100"
        leave="transition ease-in duration-10 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3">
              {NavLinks.map((item) => {
                return (
                  <>
                    <a
                      key={item.id}
                      href={item.slug}
                      className={`${item.color} ${
                        isOpen && "block"
                      } hover:bg-gray-700 px-3 py-2 rounded-lg text-ml font-medium bg-white text-black my-4 mx-2`}
                    >
                      {item.name}
                    </a>
                  </>
                );
              })}
            </div>

            <Box
              className="navbar-profile-area"
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                p: 1,
                m: 1,
              }}
            >
              <Button sx={{ width: '48%' }} variant="contained">
                Giriş Yap
              </Button>
              <Button sx={{ width: '48%', ml: '4%'}} variant="outlined">
                Kayıt Ol
              </Button>
              <Button sx={{ width: 1, mt:3 }} variant="contained">
                Mağaza Girişi
              </Button>
            </Box>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
