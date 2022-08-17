import React from "react";
import { HomeIcon, MenuAlt1Icon, SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex md:items-center px-12 py-4 md:py-2 justify-between ">
        {/* Left side */}
        <li>
          <ul className="flex items-center space-x-60">
            <li>
              <button className="flex space-x-3 cursor-pointer items-center">
                <img
                  className="h-3 md:h-4 rotate-[-45deg]"
                  src="./logo.png"
                  alt="logo"
                />
                <p className=" font-bold text-xl md:text-2xl text-secondary">
                  Kate<span className="text-primary">it</span>
                </p>
              </button>
            </li>
            <li className="hidden xl:flex space-x-2">
              <HomeIcon className="xl:h-6" />
              <p className=" font-medium text-secondary">Main Stream</p>
              <div className="h-0.5 w-6 relative top-6 right-[143px] bg-accent"></div>
            </li>
          </ul>
        </li>

        {/* Middle */}
        <li>
          <ul className="flex items-center lg:space-x-32">
            <li className="hidden md:block">
              <ul className="flex items-center  space-x-3">
                <li>
                  <button className="flex items-center">
                    <SearchIcon className="h-6 text-secondary" />
                  </button>
                </li>

                <li>
                  <button className="py-2 px-5 rounded-full text-xs  font-semibold bg-accent">
                    CREATE POST
                  </button>
                </li>
              </ul>
            </li>

            {/* Right side*/}
            <li className="hidden md:block">
              <ul className="flex items-center space-x-4">
                <li className="hidden lg:block">
                  <p className=" text-secondary">Username</p>
                </li>
                <li>
                  <button className="h-12 w-12 border border-gray-200 rounded-md p-1">
                    <img
                      className="object-fit"
                      alt="profile pic"
                      src="./profilepic.png"
                    />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="md:hidden">
          <MenuAlt1Icon className="h-6 cursor-pointer text-secondary" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
