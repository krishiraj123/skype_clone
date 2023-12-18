import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="ps-10 pt-6">
        <div className="max-w-[1240px] flex">
          <div className="flex">
            <a href="">
              <img
                className="me-8"
                src="https://secure.skypeassets.com/content/dam/scom/images/logos/re1mu3b.png"
                width={"110px"}
              />
            </a>
            <b>|</b>
          </div>
          {show ? (
            <IoIosCloseCircleOutline
              onClick={handleShow}
              className="text-xl ms-auto md:hidden block"
            />
          ) : (
            <IoMenuSharp
              className="text-xl ms-auto md:hidden block"
              onClick={handleShow}
            />
          )}

          <div className="hidden md:flex ms-auto me-auto">
            <ul className="flex gap-10">
              <li>
                <a href="/" class="font-bold hover:border-b-2 border-black">
                  Skype
                </a>
              </li>
              <li>
                <a href="/" class="hover:border-b-2 border-black">
                  Downloads
                </a>
              </li>
              <li>
                <a href="/" class="hover:border-b-2 border-black">
                  Skype to Phone
                </a>
              </li>
              <li>
                <a href="/" class="hover:border-b-2 border-black">
                  Skype Number
                </a>
              </li>
              <li>
                <a href="/" class="hover:border-b-2 border-black">
                  Feature
                </a>
              </li>
              <li>
                <a href="/" class="hover:border-b-2 border-black">
                  Product
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Responsive menu */}
        {show && (
          <ul class=" duration-300 md:hidden bg-black bg-opacity-75 text-white fixed left-[0%] top-[50px] w-full h-screen flex flex-col items-center justify-center">
            <li class="my-6">
              <a
                href="/"
                class="text-2xl font-bold hover:border-b-2 border-white"
              >
                Skype
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Downloads
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Skype to Phone
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Skype Number
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Feature
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-black">
                Product
              </a>
            </li>
          </ul>
        )}
        {!show && (
          <ul class="md:hidden bg-black bg-opacity-75 text-white fixed left-[-100%] top-[50px] w-full h-screen flex flex-col items-center justify-center">
            <li class="my-6">
              <a
                href="/"
                class="text-2xl font-bold hover:border-b-2 border-white"
              >
                Skype
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Downloads
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Skype to Phone
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Skype Number
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-white">
                Feature
              </a>
            </li>
            <li class="my-6">
              <a href="/" class="text-2xl hover:border-b-2 border-black">
                Product
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
