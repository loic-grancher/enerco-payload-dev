import React from 'react'
import Image from 'next/image'
import HomeCarousel from '../carousels/HomeCarousel'

// import homeImage from '@/public/logos/enerco/logo_inline_white.png'


export default function HomeHero() {
  return (
    <section className="md:ps-16 lg:ps-32 md:pe-0 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 py-8 lg:py-20">
      {/* Left side  */}
      <div className="flex flex-col gap-12 px-8 md:px-0">
        <div className="flex items-center gap-4">
          <Image
            rel="icon"
            src="/logos/enerco/logo_inline_white.png"
            alt=""
            width={300}
            height={50}
          />
          {/* <Image
                src={logoEnercoDark}
                alt="logo de enerco"
                className="max-w-xs"
            /> */}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl ">
          Installation, entretien et dépannage chauffage et climatisation en Normandie
        </h1>

        <p className="leading-relaxed">
          <span className="font-bold">
            Crée par Jean Démoulins, technicien qualifié en chauffage et maintenance, la société
            Enerco vous accompagne au quotidien.{' '}
          </span>
          <br /> <br />
          Pour vos projets de petite, moyenne ou grande envergure, de l'entretien simple au
          remplacement de votre système de chauffage en passant par les petits dépannages, notre
          société vous assure un service de qualité, ainsi que la sérénité sur le long terme.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <Image
            src="/logos/enerco/logo_inline_white.png"
            alt="logo de enerco"
            loading={'eager'}
            width={200}
            height={200}
            className="md:hidden min-h-[20rem] w-full object-cover rounded md:rounded-l-xl md:rounded-r-none"
          />
          <a href="/contact">
            <button className="btn btn-primary btn-lg" >Contactez-nous</button>
          </a>
          <a href="#services">
            <button className="btn btn-secondary btn-lg">Nos services</button>
          </a>
          <div className="flex gap-3 mx-5 text-4xl text-textmain">
            <a
              href="https://www.instagram.com/enercosarl/"
              className="mx-auto hover:text-primary transition"
            >
              <Image src="/icons/instagram.svg" alt="logo de enerco" width={50} height={50} className='invert icon-red-hover'/>
            </a>
            <a
              href="https://www.facebook.com/ENERCO76/"
              className="mx-auto hover:text-primary transition"
            >
              {/* <Icon name="facebook" /> */}
              <Image src="/icons/facebook.svg" alt="logo de enerco" width={50} height={50} className='invert icon-red-hover'/>
            </a>
            <a
              href="https://www.linkedin.com/company/sarl-enerco"
              className="mx-auto hover:text-primary transition"
            >
              {/* <Icon name="linkedin" /> */}
              <Image src="/icons/linkedin.svg" alt="logo de enerco" width={50} height={50} className='invert icon-red-hover'/>
            </a>
          </div>
        </div>
      </div>
      {/* Right side */}

      <div className="px-8 md:px-0 lg:pl-32">
        {/* <Image
          src="/logos/enerco/logo_inline_white.png"
          alt="logo de enerco"
          width={200}
          height={200}
          className="hidden md:block h-full w-full object-cover rounded md:rounded-l-xl md:rounded-r-none shadow-md"
        /> */}
        <HomeCarousel/>
      </div>
    </section>
  )
}
