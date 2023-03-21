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

      <section className="w-full bg-no-repeat bg-cover bg-backgroundBlockSecond py-24 h-auto flex items-center">
        <div className="px-[300px] w-full text-white font-Main sm:px-4 md:px-4 lg:px-8 ">
          <div className="text-center">
            <h1 className="text-[50px] mb-10 sm:text-[30px]">Франшиза <span className="text-brownLight">Coffeia</span></h1>
          </div>
          <div className="flex flex-wrap justify-between sm:justify-center sm:content-center sm:flex-col">
            <div className="text-[20px] text-center">
              <h1 className="text-[60px] text-main font-HandWrite font-HandWriteTitle">1000 +</h1>
              <p className="font-main text-brownLight">Посетителей ежедневно</p>
            </div>
            <div className="text-[20px] text-center">
              <h1 className="text-[60px] text-main font-HandWrite font-HandWriteTitle">Доставка</h1>
              <p className="font-main text-brownLight">Осуществляется бесплатно <br />при заказе от 300 рублей</p>
            </div>
            <div className="text-[20px] text-center">
              <h1 className="text-[60px] text-main font-HandWrite font-HandWriteTitle">24 часа</h1>
              <p className="font-main text-brownLight">Работаем днем и ночью</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="px-[300px] lg:px-[100px] sm:px-8 lp:px-4 bg-backgroundCatalog w-full h-[900px] bg-cover bg-no-repeat">
          <div className="items-center justify-center flex sm:justify-center ">
            <div className="w-20 border-[1px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
            <h1 className="px-4 text-8xl text-brown font-HandWriteTitle  sm:text-[70px]">Отзывы наших гостей</h1>
            <div className="w-20 border-[1px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
          </div>
        </div>
      </section> */}
      <section className="px-[300px] lg:px-[100px] sm:px-8 lp:px-4 bg-backgroundReviews w-full h-screen bg-cover bg-no-repea items-center justify-center flex" id='reviews'>
        <div className="rounded-md p-6 text-center">
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <div className="m-4 block rounded-lg bg-backgroundCatalog p-6 shadow-lg">
                <div>
                  <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 sm:w-72 lp:w-[180px] lg:mb-0">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md sm:w-[120px]" alt="woman avatar" />
                  </div>
                  <div>
                    <p className="mb-6 font-light text-neutral-500"> Вкусный и ароматный кофе. Кофе делается из натуральных зерен арабики. Прочла книгу и теперь знаю умные слова
                    </p>
                    <p className="mb-2 text-xl font-semibold text-neutral-800"> Анна Хакатонова
                    </p>
                    <p className="mb-0 font-semibold text-neutral-500"> Никто и звать никак
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md p-6 text-center">
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <div className="m-4 block rounded-lg bg-backgroundCatalog p-6 shadow-lg">
                <div>
                  <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 sm:w-72 lp:w-[180px] lg:mb-0">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md sm:w-[120px]" alt="woman avatar" />
                  </div>
                  <div>
                    <p className="mb-6 font-light text-neutral-500"> Вкусный и ароматный кофе. Кофе делается из натуральных зерен арабики. Прочла книгу и теперь знаю умные слова
                    </p>
                    <p className="mb-2 text-xl font-semibold text-neutral-800"> Анна Хакатонова
                    </p>
                    <p className="mb-0 font-semibold text-neutral-500"> Никто и звать никак
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md p-6 text-center">
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <div className="m-4 block rounded-lg bg-backgroundCatalog p-6 shadow-lg">
                <div>
                  <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 sm:w-72 lp:w-[180px] lg:mb-0">
                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md sm:w-[120px]" alt="woman avatar" />
                  </div>
                  <div>
                    <p className="mb-6 font-light text-neutral-500"> Вкусный и ароматный кофе. Кофе делается из натуральных зерен арабики. Прочла книгу и теперь знаю умные слова
                    </p>
                    <p className="mb-2 text-xl font-semibold text-neutral-800"> Анна Хакатонова
                    </p>
                    <p className="mb-0 font-semibold text-neutral-500"> Никто и звать никак
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;