import React from 'react'
import Title from '../assets/img/Title.svg'
import { AboutUs } from '../components/AboutUs'
import Catalog from '../components/Сatalog'

const Home = () => {
  return (
    <>
      <div> {/* Фон под шапкой сайта */}
        <div className="relative">
          <div className="top-[300px] absolute px-[300px] lg:px-[100px] lg:top-[200px] sm:px-8 lp:px-4 lp:text-center">
            <img src={Title} alt="" />
            <h1 className="text-main mt-8 mb-2 text-[30px] font-Main lg:mt-30">Лучший кофейный ресторан</h1>
            <div className="max-w-xl">
              <i className="text-main top-2 text-[20px] font-Main">Порадуйте свой вкус и бодрость с каждой чашкой - наш сайт предлагает самые ароматные и качественные зерна кофе из лучших уголков мира!</i>
            </div>
          </div>
          <div className="flex justify-end px-[300px] sm:px-14 sm:justify-center">
            <h1 type='tel' className="absolute top-[95vh] font-Main text-gray-500 animate-pulse">+7 999 (432)-12-23</h1>
          </div>
        </div>
        <div className="w-full h-[100vh] bg-no-repeat bg-cover bg-backgroundHeader" />
      </div>

      <div id='aboutUs'>
        <AboutUs />
      </div>

      <section className="w-full bg-no-repeat bg-cover bg-backgroundBlock py-20 h-[500px] flex items-center">
        <div className="px-20 max-w-[900px] text-white font-Main sm:px-8 lp:px-4">
          <div>
            <h1 className="text-[50px] leading-[50px] mb-10 sm:text-[30px]">Лучшие истории рассказывают за чашечкой кофе</h1>
          </div>
          <div className="text-[20px]">
            <p>Наш кофе наполнит вас энергией на весь день! Мы делаем его с душой и чистым сердцем, благоддаря чему наши клиенты получают отличное настроение и позитивный настрой</p>
          </div>
        </div>
      </section>

      <div id='priceList'>
        <Catalog />
      </div>

      <section className="w-full bg-no-repeat bg-cover bg-backgrundFooter py-20 h-[500px] flex items-center">
        <div className="px-20 max-w-[900px] text-white font-Main sm:px-8 lp:px-4">
          <div>
            <h1 className="text-[50px] leading-[50px] mb-10 sm:text-[30px]">Лучшие истории рассказывают за чашечкой кофе</h1>
          </div>
          <div className="text-[20px] text-center">
            <h1>1000+</h1>
            <p>Посетителей ежедневно</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;