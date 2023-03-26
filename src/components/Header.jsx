import React, { useState } from 'react';
import Logo from '../assets/img/logo.svg';
import { Link } from "react-scroll";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="absolute text-main w-full px-[300px] flex items-center justify-between py-8 sm:px-8 lp:px-4 lg:px-20">
      <ul className="flex items-center gap-x-8">
        <a href="/"> <img src={Logo} alt="" className="hover:filter hover:sepia duration-300" /></a>
        <a href="/" className=" hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px] cursor-pointer lg:text-[40px]">Главная</a>
      </ul>
      <nav>
        <section className="MOBILE-MENU flex">
          <div
            className="HAMBURGER-ICON space-y-[5px] hidden lg:inline cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-9 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-400 hover:text-main duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-main text-2xl">
              <li className="">
                <Link
                  activeClass="active"
                  to="priceList"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">Прайс-лист</Link>
              </li>
              <li className="">
                <Link
                  activeClass="active"
                  to="reviews"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">Отзывы</Link>
              </li>
              <li className="">
                <Link
                  activeClass="active"
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">О нас</Link>
              </li>
              <li className="">
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">Контакты</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="lg:hidden gap-x-8 flex-wrap flex nav text-main">

          <Link
            activeClass="active"
            to="priceList"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
            className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">Прайс-лист</Link>
          <Link
            activeClass="active"
            to="reviews"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
            className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">Отзывы</Link>
          <Link
            activeClass="active"
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
            className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">О нас</Link>
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
            className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]  cursor-pointer">Контакты</Link>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: fixed;
      transition: .3s;
      backdrop-filter: blur(2px);
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: #202020af;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
    </div >
  )
}

export default Header;
