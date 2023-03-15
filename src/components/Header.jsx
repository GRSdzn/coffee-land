import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="absolute text-main w-full px-[300px] flex items-center justify-between py-8 sm:px-8 lp:px-4 lg:px-20">
      <ul className="flex items-center gap-x-8">
        <Link to="/"> <img src={Logo} alt="" className="hover:filter hover:sepia duration-300" /></Link>
        <Link to="/" className=" hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">Главная</Link>
      </ul>
      <nav>
        <section className="MOBILE-MENU flex">
          <div
            className="HAMBURGER-ICON space-y-2 hidden lg:inline cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-20 py-8 cursor-pointer"
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
                <Link to="/" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">Преимущества</Link>
              </li>
              <li className="">
                <Link to="/" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">Отзывы</Link>
              </li>
              <li className="">
                <Link to="/AboutUs" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">О нас</Link>
              </li>
              <li className="">
                <Link to="/" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">Контакты</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="lg:hidden gap-x-8 flex-wrap flex nav text-main">
          <Link to="/" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">Преимущества</Link>
          <Link to="/" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">Отзывы</Link>
          <Link to="/AboutUs" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">О нас</Link>
          <Link to="/" className="hover:text-navHover duration-300 focus:border-navHover focus:text-navHover focus:border-b-[1px]">Контакты</Link>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
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
    </div>
  )
}

export default Header;
