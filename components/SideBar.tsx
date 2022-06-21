import Image from "next/image";

import avatar from "../image/image.png";

import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";

const SideBar = () => {
  return (
    <aside>
      <Image
        src={avatar}
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Tiago</span> Garbi
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Full Stack Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        href=""
        download="name"
      >
        <FaUserTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social Icon */}
      {/* Adress */}
      <section>
        <article className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
          <p className="flex items-center justify-center">
            <BsGithub className="w-8 h-8 cursor-pointer" />
          </p>
          <p className="flex items-center justify-center">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </p>
        </article>
        <article>
          <p className="flex items-center justify-center">
            <GoLocation className="mr-2" />
            Minas Gerais, Brasil
          </p>
          <a
            className="flex items-center justify-center"
            href="mailto:tgbmateriais@gmail.com"
          >
            <AiOutlineMail className="mr-4" />
            tgbmateriais@gmail.com
          </a>
          <p className="flex items-center justify-center">
            <IoIosPhonePortrait className="mr-4" />
            (35) 99977-3556
          </p>
        </article>
        <article>
          <button type="button">Email Me</button>
          <button type="button">Toggle Theme</button>
        </article>
      </section>
    </aside>
  );
};

export default SideBar;
