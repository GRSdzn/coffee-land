import React from 'react'

export const Contacts = () => {
  return (
    <div>
      <section className="px-[300px] lg:px-[100px] sm:px-8 lp:px-4 bg-backgroundContacts w-full bg-cover bg-no-repeat flex md:flex-col" id='contacts'>
        <div className="py-40 my-8 rounded-lg px-14 max-w-[500px]  bg-no-repeat bg-cover bg-fixed bg-backgroundCatalog  text-center">
          <h1 className="text-brown font-Main font-bold text-[45px]">Свяжитесь с нами</h1>
          <div className="font-main">
            <p className="font-light text-[20px]">Мы здесь, чтобы поднять ваше настроение на <span className="text-brown font-medium"> весь </span>день!</p>

            <div className="border-b-2 my-8 border-main" />

            <ul className="text-brownLight font-medium leading-10">
              <li>Телефон : <a href="tel:+79777777777" className=" border-b-[1px] py-1 font-bold">+7(977)-777-77-77</a></li>
              <li>Местоположение: <span className="font-bold"> пр. Стачки 184/2 </span></li>
              <li>Почта: <span className="font-bold"> coffe_i_a@ya.ru </span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
