import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import "./Header.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const leftNavigation = [
  { name: "AboutUs", to: "/about-us" },
  { name: "Community & Business Network", to: "/community-business-network" },
  { name: "Events & Programs", to: "/events-and-programs"},
];

const rightNavigation = [
  { name: "Resources & Support", to: "/resources-and-support" },
  { name: "Donate & Sponsorships", to: "/donate-and-sponsorships" },
  { name: "Contact & Social Media", to: "/contact-and-social-media"}
];

export default function Header() {
  {console.log("header")}
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50">
      {({open, close}) => {
        //close menu when scrollling
      return (
        <>
      <ScrollCloseMenu open={open} close={close} />
      <div className="headerColor mx-auto">
        <div className="relative flex h-16 sm:justify-center">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <NavLink to="/" aria-label="Go to home">
            <img
              alt="Logo"
              src="/images/hhLogo.png"
              className="h-10 w-auto ml-2"
            />
            </NavLink>
            <h1 className="Title text-[#0A1931]">&nbsp; Hispanohablantes</h1>
          </div>
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-28 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex rounded-md p-2 text-slate-200 hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open ? (
                  <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-open:block"
                />
              ):(
                <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-open:hidden"
              />
              )}
            </DisclosureButton>
          </div>
          <div className="hidden sm:flex items-center gap-x-6">
            {/* Left Navigation - About us & Services */}
            <div className="flex space-x-20">
              {leftNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-[#0A1931] hover:bg-neutral-900 hover:text-white",
                      "rounded-md px-4 py-2 text-base font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0 mx-16">
            <NavLink to="/" aria-label="Go to home">
              <img
                alt="Logo"
               src="/images/hhLogo.png"
                className="h-16 w-auto rounded-sm"
              />
              </NavLink>
            </div>

            {/* Right Navigation - Gallery & FAQ */}
            <div className="flex space-x-20">
              {rightNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-[#0A1931] hover:bg-neutral-900 hover:text-white",
                      "rounded-md px-4 py-2 text-base font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-slate-700">
          {leftNavigation.concat(rightNavigation).map((item) => (
            <DisclosureButton key={item.name} as={NavLink} to={item.to}
            className={classNames(
              "block rounded-md px-3 py-2 text-base font-medium",
              item.current
                ? "bg-gray-900 text-white"
                : "text-slate-200 hover:bg-gray-700 hover:text-white"
            )}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            {item.name}
              </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
      </>
        );
      }}
    </Disclosure>
  );
}

function ScrollCloseMenu({ open, close }) {
  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        close();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open, close]);

  return null;
}