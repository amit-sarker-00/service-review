import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="px-10 py-24 divide-y  bg-black text-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link
              to="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                <img src={logo} alt="" />
              </div>
              <span className="self-center text-2xl font-semibold">
                WildRabbit
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link className="link-hover" to="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" to="#">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" to="#">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" to="#">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link className="link-hover" to="#">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" to="#">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="link-hover" to="#">
                    Public API
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" to="#">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" to="#">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                <Link
                  to="#"
                  title="Facebook"
                  className="flex items-center p-1 link-hover"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </Link>
                <Link
                  to="#"
                  title="Twitter"
                  className="flex items-center link-hover p-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p>Copyright © 2022 - All right reserved by WildRabbit</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
