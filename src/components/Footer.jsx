import React from 'react'
import Logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>

      <footer class="px-20 sm:px-0 py-4 bg-backgrundFooter">
        <div class="container mx-auto p-4 md:px-6 md:py-8">
          <div class="lp:flex-col sm:justify-between">
            <Link to="/" href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
              <img src={Logo} class="h-8 mr-3" alt="Coffeia" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Coffeia</span>
            </Link>
            <ul class="flex flex-wrap lp:items-start items-center mb-6 text-sm lp:flex-col text-main lp:mb-0 dark:text-gray-400">
              <li>
                <Link to="/" class="mr-4 hover:underline md:mr-6 ">Преимущества</Link>
              </li>
              <li>
                <Link to="/" class="mr-4 hover:underline md:mr-6">Отзывы</Link>
              </li>
              <li>
                <Link to="/" class="mr-4 hover:underline md:mr-6 ">О нас</Link>
              </li>
              <li>
                <Link to="/" class="hover:underline">Контакты</Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="https://flowbite.com/" class="hover:underline">Coffeia</a> Все права соблюдены.</span>
        </div>
      </footer>


    </>
  )
}

export default Footer;
