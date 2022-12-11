import React, { useState } from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Transition } from "@headlessui/react";
import { NavLinks } from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nav() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [isOpen, setIsOpen] = useState(false);

  const navbarMenu = () => {
    if (isOpen) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <nav className="main-navbar bg-gray-800">
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

          {!isTabletOrMobile && (
            <div className="navbar-account-area">
              <Button
                className="login-button"
                sx={{ width: "42%", fontWeight: "bold", m: 1 }}
                variant="contained"
              >
                Giriş Yap
              </Button>
              <Button
                className="register-button"
                sx={{
                  width: "42%",
                  ml: "8%",
                  color: "white",
                  bgcolor: "green",
                  fontWeight: "bold",
                }}
                variant="outlined"
              >
                Kayıt Ol
              </Button>
            </div>
          )}
        </div>
        <div className="flex md:hidden my-2">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              navbarMenu();
            }}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-3 rounded-md text-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Mobile Navigation Menu</span>
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="menu-height opacity-100 scale-100"
        leave="hidden transition ease-in duration-10 transform"
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
              <Button
                sx={{ width: "48%", fontWeight: "bold" }}
                variant="contained"
              >
                Giriş Yap
              </Button>
              <Button
                sx={{
                  width: "48%",
                  ml: "4%",
                  color: "white",
                  bgcolor: "green",
                  fontWeight: "bold",
                }}
                variant="outlined"
              >
                Kayıt Ol
              </Button>
              <Button
                sx={{ width: 1, mt: 3, fontWeight: "bold", bgcolor: "#71b5ff" }}
                variant="contained"
              >
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
