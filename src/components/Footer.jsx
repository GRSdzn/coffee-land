import React from 'react'
import Logo from '../assets/img/logo.svg';
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <footer className="px-20 sm:px-0 py-4 bg-backgroundFooter">
        <div className="container mx-auto p-4 md:px-6 md:py-8">
          <div className="lp:flex-col sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img src={Logo} className="h-8 mr-3" alt="Coffeia" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Coffeia</span>
            </Link>
            <ul className="flex flex-wrap lp:items-start items-center mb-6 text-sm lp:flex-col text-main lp:mb-0 dark:text-gray-400 mt-8">
              <li>
                <Link
                  activeClass="active"
                  to="priceList"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="mr-4 hover:underline md:mr-6 cursor-pointer">Прайс-лист</Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="reviews"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="mr-4 hover:underline md:mr-6 cursor-pointer">Отзывы</Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="mr-4 hover:underline md:mr-6 cursor-pointer">О нас</Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="hover:underline cursor-pointer">Контакты</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a className="hover:underline">Coffeia</a> Все права соблюдены.</span>
        </div>
      </footer>


    </>
  )
}

export default Footer;
