import React from 'react'
import zerna from '../assets/img/zerna.svg'
import donut from '../assets/img/donut.svg'
import cup from '../assets/img/cup.svg'
import wifi from '../assets/img/wifi.svg'
import map from '../assets/img/map.svg'
export const AboutUs = () => {
  return (
    <div>
      <section className="w-full bg-no-repeat h-screen bg-cover bg-backgroundSecond bg-center  max-w-full min-w-fit lg:justify-center flex justify-end">{/* О нас */}
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
    </div>
  )
}
