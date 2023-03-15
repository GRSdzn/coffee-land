import React from 'react'
import Title from '../assets/img/Title.svg'
import zerna from '../assets/img/zerna.svg'
import donut from '../assets/img/donut.svg'
import cup from '../assets/img/cup.svg'
import wifi from '../assets/img/wifi.svg'
import map from '../assets/img/map.svg'

const Home = () => {
  return (
    <>
      <div> {/* Фон под шапкой сайта */}
        <div className="relative">
          <div className="top-[300px] absolute px-[300px] lg:px-[100px] lg:top-[200px] sm:px-8 lp:px-4 lp:text-center">
            <img src={Title} alt="" />
            <h1 className="text-main mt-8 mb-2 text-[30px] font-Main lg:mt-30">Лучший кофейный ресторан</h1>
            <div className="max-w-xl">
              <i className="text-main top-2 text-[20px] font-Main">Коффе сделан из натуральных зерен и привезен с Италии Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corrupti ratione? Fuga, numquam. Soluta, dolore recusandae minima amet magni neque ducimus nihil fugit ratione perferendis obcaecati blanditiis nulla placeat molestiae?</i>
            </div>
          </div>
          <div className="flex justify-end px-[300px]  sm:justify-center">
            <h1 type='tel' className="absolute top-[95vh] font-Main text-gray-500 animate-pulse">+7 999 (432)-12-23</h1>
          </div>
        </div>
        <div className="w-full h-[100vh] bg-no-repeat bg-cover bg-backgroundHeader" />


        {/* <div className="bg-main max-w-[150px] h-[70px] flex justify-center rounded-tr-3xl rounded-bl-3xl  outline outline-offset-4 text-center items-center outline-beige">
            <h1 className="text-brown font-Main text-[24px] font-bold">Кофе</h1> */}
      </div>
      <section className="w-full bg-no-repeat bg-cover bg-backgroundSecond bg-center h-[80vh]  max-w-full min-w-fit lg:justify-center flex justify-end">{/* О нас */}
        <div className="px-[300px] lg:px-[100px] sm:px-8 lp:px-4 bg-backgroundPng w-full h-full bg-no-repeat bg-right flex items-center justify-end">
          <div>
            <div className="flex flex-col py-20">
              <div className="items-center flex">
                <div className="w-20 border-[1px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
                <h1 className="px-4 text-right text-8xl text-brown font-HandWriteTitle sm:text-[40px]">О нас</h1>
                <div className="w-20 border-[1px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
              </div>
              <div className="font-Main">
                <div>
                  <p className="text-brownLight pt-2 pb-8 font-bold  text-[25px] sm:text-[20px] text-center">Причины стать нашим клиентом</p>
                </div>
                <div className="grid grid-flow-col leading-10">
                  <div className="flex flex-col justify-around items-center mr-4">
                    <img src={zerna} alt="" />
                    <img src={donut} alt="" />
                    <img src={cup} alt="" />
                    <img src={wifi} alt="" />
                    <img src={map} alt="" />
                  </div>
                  <ul className="text-[20px] text-main leading-10 sm:text-[15px]">
                    <li>Только свежие и качественные продукты</li>
                    <li>Всегда свежая выпечка</li>
                    <li>Дружелюбный персонал</li>
                    <li>Бесплатный WIFI</li>
                    <li>Удобное местоположение</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


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


      <section className="w-full items-center justify-center flex bg-no-repeat bg-cover bg-backgroundCatalog py-20">
        <div className="px-[300px] py-20 lg:px-[100px] sm:px-8 lp:px-4">
          <div className="items-center flex py-8 lg:justify-center">
            <div className="w-20 border-[1px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
            <h1 className="px-4 text-right text-8xl text-brown font-HandWriteTitle sm:text-[40px]">Прайс-лист</h1>
            <div className="w-20 border-[1px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
          </div>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 1xl:grid-cols-1">
              <div className="gap-5 grid">

                <div className="flex gap-5 sm:flex-col">
                  <div>
                    <div className="bg-no-repeat bg-cover bg-backgroundHeader rounded-md w-52 h-40" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="font-Main font-bold text-4xl text-brown">Каппучино</h1>
                      <p className=" text-2xl font-main text-brown">500 RUB</p>
                    </div>
                    <div className="w-12 border-[0.5px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
                    <p className="text-lg">Один из самых популярных коффе в мире не обошел стороной нашу кофейню</p>
                  </div>
                </div>
                <div className="flex gap-5 sm:flex-col">
                  <div>
                    <div className="bg-no-repeat bg-cover bg-backgroundHeader rounded-md w-52 h-40" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="font-Main font-bold text-4xl text-brown">Каппучино</h1>
                      <p className=" text-2xl font-main text-brown">500 RUB</p>
                    </div>
                    <div className="w-12 border-[0.5px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
                    <p className="text-lg">Один из самых популярных коффе в мире не обошел стороной нашу кофейню</p>
                  </div>
                </div>
                <div className="flex gap-5 sm:flex-col">
                  <div>
                    <div className="bg-no-repeat bg-cover bg-backgroundHeader rounded-md w-52 h-40" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="font-Main font-bold text-4xl text-brown">Каппучино</h1>
                      <p className=" text-2xl font-main text-brown">500 RUB</p>
                    </div>
                    <div className="w-12 border-[0.5px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
                    <p className="text-lg">Один из самых популярных коффе в мире не обошел стороной нашу кофейню</p>
                  </div>
                </div>
              </div>

              <div className="gap-5 grid">
                <div className="flex gap-5 sm:flex-col">
                  <div>
                    <div className="bg-no-repeat bg-cover bg-backgroundHeader rounded-md w-52 h-40" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="font-Main font-bold text-4xl text-brown">Каппучино</h1>
                      <p className=" text-2xl font-main text-brown">500 RUB</p>
                    </div>
                    <div className="w-12 border-[0.5px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
                    <p className="text-lg">Один из самых популярных коффе в мире не обошел стороной нашу кофейню</p>
                  </div>
                </div>
                <div className="flex gap-5 sm:flex-col">
                  <div>
                    <div className="bg-no-repeat bg-cover bg-backgroundHeader rounded-md w-52 h-40" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="font-Main font-bold text-4xl text-brown">Каппучино</h1>
                      <p className=" text-2xl font-main text-brown">500 RUB</p>
                    </div>
                    <div className="w-12 border-[0.5px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
                    <p className="text-lg">Один из самых популярных коффе в мире не обошел стороной нашу кофейню</p>
                  </div>
                </div>
                <div className="flex gap-5 sm:flex-col">
                  <div>
                    <div className="bg-no-repeat bg-cover bg-backgroundHeader rounded-md w-52 h-40" />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="font-Main font-bold text-4xl text-brown">Каппучино</h1>
                      <p className=" text-2xl font-main text-brown">500 RUB</p>
                    </div>
                    <div className="w-12 border-[0.5px] border-solid border-brown bg-brown h-1 sm:w-10 lp:w-8" />
                    <p className="text-lg">Один из самых популярных коффе в мире не обошел стороной нашу кофейню</p>
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