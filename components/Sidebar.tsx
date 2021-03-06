import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";

import { useTheme } from "next-themes";

import Image from "next/image";

const SideBar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <aside>
      <Image
        src="/images/image.png"
        alt="avatar"
        className="mx-auto border rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-red">Tiago</span> Garbi
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Desenvolvedor Full Stack
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 hover:bg-darkRed"
        href=""
        download="name"
      >
        <FaUserTie className="w-4 h-4 mr-2" />
        Download Currículo
      </a>
      {/* Social Icon */}
      {/* Adress */}
      <section>
        <article className="flex justify-around w-9/12 mx-auto my-5 text-darkRed md:w-full ">
          <a
            href="https://github.com/tiagogb21"
            className="flex items-center justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-8 h-8 cursor-pointer" />
          </a>
          <a
            href="https://www.google.com"
            className="flex items-center justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
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
          <button
            type="button"
            className="w-8/12 px-5 py-2 my-4 rounded-full cursor-pointer text-white bg-orange focus:outline-none hover:scale-105 font-bold	font-weight: 700;"
            onClick={() => window.open("mailto:tgbmateriais@gmail.com")}
          >
            Email
          </button>
          <button
            type="button"
            onClick={changeTheme}
            className="w-8/12 px-5 py-2 my-4 rounded-full cursor-pointer text-white bg-orange focus:outline-none hover:scale-105 font-bold	font-weight: 700;"
          >
            Mudar Tema
          </button>
        </article>
      </section>
    </aside>
  );
};

export default SideBar;
