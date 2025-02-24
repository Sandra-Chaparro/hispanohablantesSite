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

const navigation = [
  { name: "About", current: false, isDropdown: true, submenu:[
    { name: "About Us", link: "/about/about-us" },
    { name: "Our Team", link: "/about/team" },
    { name: "Social Media", link: "/about/social-media" },
    { name: "Organizational Structure", link: "/about/structure" },
  ]},
  { name: "Community & Business", current: false, isDropdown: true, submenu:[
    { name: "Get Involved", link: "/community/get-involved" },
    { name: "Business Promotion", link: "/community/business-promotion" },
  ]},
  { name: "Events", current: false, isDropdown: true, submenu:[
    { name: "Calendar", link: "/events/calendar" },
    { name: "Enlace Hispano", link: "/events/enlace-hispano" },
    { name: "Hispanic Heritage", link: "/events/hispanic-heritage" },
    { name: "Education & Workshops", link: "/events/education-workshops" },
  ]},
  { name: "Resources & Support", current: false, isDropdown: true, submenu:[
    { name: "Guide for Business Owners", link: "/resources/guide-for-business-owners" },
    { name: "Educational Resources", link: "/resources/educational-resources" },
    { name: "Legal Aid", link: "/resources/legal-aid" },
    { name: "Health Support", link: "/resources/health-support" },
  ] },
  { name: "Donate & Sponsor", current: false, isDropdown: true, submenu:[
    { name: "Why Support Us?", link: "/donate/why-support-us" },
    { name: "Ways to Contribute", link: "/donate/ways-to-contribute" },
    { name: "Recognizing Supporters", link: "/donate/recognizing-supporters" },
    { name: "Fundraising Goals", link: "/donate/fundraising-goals" },
  ]},
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false); //to show/hide the dropdown menu when mouse on top 
  const [hoverTimeout, setHoverTimeout] = useState(null);//ensures there is enough time for the user to select from dropdown
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50">
      {({open, close}) => {
        //close menu when scrollling
      return (
        <>
      <ScrollCloseMenu open={open} close={close} />
      <div className="headerColor mx-auto">
        <div className="relative flex h-12 sm:h-0 sm:justify-center">
           {/* Mobile*/}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <NavLink to="/" aria-label="Go to home">
            <img
              alt="Logo"
              src="/images/hhLogo.png"
              className="h-10 w-auto ml-2"
            />
            </NavLink>
          </div>
         {/* Mobile menu icon*/}
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
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
          {({ close }) => (
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
              item.isDropdown ? (
              <Disclosure key={item.name} as="div" className="border-b border-gray-200">
                {({ open }) => (
                  <>
                    <DisclosureButton
                      className="w-full flex justify-between items-center rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                      <span>{open ? "▲" : "▼"}</span> {/* Arrow indicator */}
                    </DisclosureButton>
                    <DisclosurePanel className="pl-6">
                      {item.submenu.map((subItem) => (
                        <NavLink 
                          key={subItem.name}
                          to={subItem.link}
                          className="block py-2 px-4 text-white hover:bg-gray-700 hover:text-white"
                        >{subItem.name}
                        </NavLink>)
                      )}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              ) : (        
                                          
                <NavLink
                className={classNames(
                  "block rounded-md px-3 py-2 text-base font-medium ",
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-white hover:bg-gray-700 hover:text-white"
                  )}
                  to={item.href}
                  aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                  onClick={() => close()} key={item.name}
                >
                {item.name}
               
                </NavLink>      
                )
              ))}
            </div>
       )}
          </DisclosurePanel>

       {/* Desktop mode */}
       <div className="hidden sm:ml-6 sm:block">
       
       <div className="flex space-x-28 sm:mx-auto">
       <a href="/" className="flex shrink-0 items-center logo-container ">
               <img 
                 alt="logo"
                 src="/images/hhLogo.png"
                 className="h-12 w-auto rounded-sm border-gray-300 shadow"
               />
             </a>
         {navigation.map((item) => 
           item.isDropdown ?(
             <div  
               key={item.name}
               className="relative text-gray-300 hover:bg-white hover:text-black rounded-md"
               onMouseEnter={() => {
               if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any existing timeout when entering
                   setOpenDropdown(true); // Open the dropdown
                   setOpenDropdown(item.name); 
                 }}
                 onMouseLeave={() => {
                   setHoverTimeout(setTimeout(() => setOpenDropdown(false), 150));  // Close the dropdown after a delay
                 }}
             >
               <button className="text-gray-300 hover:bg-white hover:text-black rounded-md py-4 text-md font-medium md:px-6 hover:px-6"
               >
                 {item.name}
               </button>
               {openDropdown === item.name && (
                 <div className="absolute w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                 >
                      {item.submenu.map((subItem) => (
                        <NavLink 
                          key={subItem.name}
                          to={subItem.link}
                          className="block py-2 px-4 text-white hover:bg-gray-700 hover:text-white"
                        >{subItem.name}
                        </NavLink>)
                      )}             
                 </div>
                   )}
             </div>)
           :
             (<a
             key={item.name}
             href={item.href}
             aria-current={item.current ? "page" : undefined}
             className={classNames(
               item.current
                   ? "bg-white text-black "
                   : "text-gray-300 hover:bg-white hover:text-black whitespace-nowrap inline-block",
                   "rounded-md  py-6 text-lg font-medium", "md:px-6 hover:px-6"
             )}
             >
               {item.name}
             </a>)                    
           )}   
           </div>                 
       </div> 
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