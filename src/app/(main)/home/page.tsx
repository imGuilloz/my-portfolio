'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef as UseRef } from "react";
import { RiMenu3Fill, RiLinkedinFill, RiInstagramLine, RiTwitterXFill } from "react-icons/ri";

export default function page() {

  const mainRef = UseRef(null);
  const servicesRef = UseRef(null);
  const projectsRef = UseRef(null);
  const aboutMeRef = UseRef(null);

  const HandleScrollTo = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="px-6 py-8 laptop:px-16">
        <nav className="text-[#FFF] left-0">
          <div className="max-[600px]:hidden flex justify-between">
            <ul className="flex space-x-10 items-center">
              <li className="text-xl font-semibold hover:cursor-pointer">Guillermo.</li>
              <li className="hover:cursor-pointer" onClick={() => HandleScrollTo(mainRef)}>Inicio</li>
              <li className="hover:cursor-pointer" onClick={() => HandleScrollTo(servicesRef)}>Servicios</li>
              <li className="hover:cursor-pointer" onClick={() => HandleScrollTo(projectsRef)}>Proyectos</li>
              <li className="hover:cursor-pointer" onClick={() => HandleScrollTo(aboutMeRef)}>Sobre mi</li>
            </ul>
            <div className="flex items-center">
              <button className="relative h-12 overflow-hidden rounded-full border border-[#FFF] bg-transparent px-4 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:-translate-x-full before:bg-neutral-100 before:transition-transform hover:before:translate-x-0 text-white hover:text-[#1C1C22]"><span className="relative">Contactame</span></button>
            </div>
          </div>
          <div className="flex items-center justify-between laptop:hidden">
            <span className="text-xl bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold bg-clip-text text-transparent">Guillermo.</span>
            <RiMenu3Fill className="w-5 h-5 laptop:hidden" />
          </div>
        </nav>
      </header>
      <main className="px-6 py-10 laptop:px-16 laptop:py-14 desktop:py-20 desktop:px-24" ref={mainRef}>
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            className="rounded-full laptop:hidden"
            src={'https://media.licdn.com/dms/image/D4D03AQFY0XIlyMCTHw/profile-displayphoto-shrink_400_400/0/1714443667708?e=1720656000&v=beta&t=leAjIu7wdDV5r8NF9D1lCybAwBI9bRF-ul9V0-rpQfY'}
            width={170}
            height={170}
            alt="Foto de perfil"
          />
          <Image
            className="max-[600px]:hidden rounded-full"
            src={'https://media.licdn.com/dms/image/D4D03AQFY0XIlyMCTHw/profile-displayphoto-shrink_400_400/0/1714443667708?e=1720656000&v=beta&t=leAjIu7wdDV5r8NF9D1lCybAwBI9bRF-ul9V0-rpQfY'}
            width={230}
            height={230}
            alt="Foto de perfil"
          />
          <h2 className="text-4xl mt-10 font-semibold text-left laptop:text-5xl laptop:text-center desktop:text-6xl"><span className="font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">Hola, soy Guillermo</span> <br /> un desarrollador Front-End</h2>
          <p className="mt-10 text-left desktop:text-5xl desktop:bg-red-100">Me gusta programar paginas web atractivas para generar una experiencia increible.</p>
        </div>
        <div className="flex flex-col laptop:flex-row laptop:mt-10 laptop:space-x-5 laptop:justify-center">
          <button className="bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold rounded-full text-2xl text-white w-48 py-3 mt-8 laptop:bg-[#FFF] laptop:mt-0 hover:bg-gradient-to-r hover:from-[#FF8A56] hover:to-[#B16CEA] hover:via-[#FF5E69] transition-all">
            Contactame
          </button>
          <button className="relative py-3 w-48  overflow-hidden rounded-full text-2xl font-semibold border border-[#FFF] bg-transparent px-4 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:-translate-x-full before:bg-neutral-100 before:transition-transform hover:before:translate-x-0 text-white hover:text-[#1C1C22]"><span className="relative">Proyectos</span></button>
        </div>
      </main>
      <section className="bg-[#1C1C22] w-screen h-screen antialiased px-6 py-8 laptop:px-16" ref={servicesRef}>
        <div className="flex flex-col mt-5">
          <span className="text-2xl font-semibold text-right laptop:text-4xl laptop:text-center">Desarrollando experiencias que</span>
          <span className="text-2xl text-right bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold bg-clip-text text-transparent laptop:text-4xl laptop:text-center">resuelven problemas reales.</span>
        </div>
        <ul className="flex flex-col mt-10 text-2xl p-5 laptop:text-3xl">
          <li className="group relative p-10 border-t-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">Diseño responsivo</span></li>
          <li className="group relative p-10 border-t-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">Front-End</span></li>
          <li className="group relative p-10 border-t-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">Hosting</span></li>
          <li className="group relative p-10 border-t-[1px] border-b-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">SEO</span></li>
        </ul>
      </section>
      <section className="w-screen antialiased px-6 py-8 laptop:px-16 laptop:py-14" ref={projectsRef}>
        <div>
          <h3 className="text-4xl font-semibold">Mira mis <span className="bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">proyectos.</span></h3>
          <div className="mt-10 grid grid-cols-1 gap-4 justify-center laptop:grid-cols-2 laptop:gap-10">
            <div className="rounded-md bg-[#1C1C22] laptop:w-3/4 hover:cursor-pointer hover:scale-105 duration-300 transition-all">
              <Link href={'https://natours-guillermo.netlify.app/'} target="blank">
                <Image
                  className="w-full h-52 rounded-t-md"
                  src={'https://i.imgur.com/Ek25XUN.png'}
                  width={170}
                  height={170}
                  alt="Foto de primer proyecto"
                />
                <div className="flex flex-col space-y-3 p-5">
                  <h3 className="font-semibold">Trips Landing Page</h3>
                  <p>HTML, CSS, JavaScript</p>
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-[#1C1C22] laptop:w-3/4 hover:cursor-pointer hover:scale-105 duration-300 transition-all">
              <Link href={'https://omnifood-guillermo.netlify.app/'} target="blank">
                <Image
                  className="w-full h-52 rounded-t-md"
                  src={'https://i.imgur.com/28SP0Op.png'}
                  width={170}
                  height={170}
                  alt="Foto de segundo proyecto"
                />
                <div className="flex flex-col space-y-3 p-5">
                  <h3 className="font-semibold">Food Landing Page</h3>
                  <p>HTML, CSS y JavaScript</p>
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-[#1C1C22] laptop:w-3/4 hover:cursor-pointer hover:scale-105 duration-300 transition-all">
              <Link href={'https://far-away-8m98u7zzc-lguillozl.vercel.app/'} target="blank">
                <Image
                  className="w-full h-52 rounded-t-md"
                  src={'https://i.imgur.com/aOajknX.png'}
                  width={170}
                  height={170}
                  alt="Foto de tercer proyecto"
                />
                <div className="flex flex-col space-y-3 p-5">
                  <h3 className="font-semibold">Packing List App</h3>
                  <p>React, JavaScript, Tailwind</p>
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-[#1C1C22] laptop:w-3/4 hover:cursor-pointer hover:scale-105 duration-300 transition-all">
              <Link href={'https://forkify-app-flame.vercel.app/'} target="blank">
                <Image
                  className="w-full h-52 laptop:h-30 rounded-t-md"
                  src={'https://i.imgur.com/R7D0G5O.png'}
                  width={170}
                  height={170}
                  alt="Foto de perfil"
                />
                <div className="flex flex-col space-y-3 p-5">
                  <h3 className="font-semibold">Cooking Recipes</h3>
                  <p>React, JavaScript, Tailwind</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1C1C22] h-screen w-screen antialiased px-6 py-8 laptop:px-16 laptop:h-auto" ref={aboutMeRef}>
        <h3 className="text-4xl font-semibold laptop:hidden">Guillermo Olvera</h3>
        <p className="mt-6 laptop:hidden">
          Hola, soy un desarrollador web con más de 3 años de experiencia.
          <br />
          <br />
          Tengo conocimientos en tecnologias como: HTML, CSS, JavaScript,
          TypeScript, React, NextJs, Tailwind, Git, GitHub, NPM, Jira y Trello.
          <br />
          <br />
          Dos frases que más me identifican son: &quot;No te rindas&quot; y <i>&quot;Si puedes imaginarlo puedes programarlo&quot;.</i>
        </p>
        <div className="max-[600px]:hidden flex items-center space-x-10 mt-10">
          <h3 className="text-4xl font-semibold">Guillermo <br /> Olvera</h3>
          <p className="">
            Hola, soy un desarrollador web con más de 3 años de experiencia.
            Tengo conocimientos en tecnologias como: HTML, CSS, JavaScript,
            TypeScript, React, NextJs, Tailwind, Git, GitHub, NPM, Jira y Trello.
          </p>
          <p className="">
            Dos frases que más me identifican son: &quot;No te rindas&quot; y <i>&quot;Si puedes imaginarlo puedes programarlo&quot;.</i>
          </p>
        </div>
        <div className="max-[600px]:hidden flex justify-around mt-10">
          <div className="mt-6 flex flex-col items-center font-semibold">
            <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">10+</span>
            <p className="mt-3">Proyectos finalizados.</p>
          </div>
          <div className="mt-6 flex flex-col items-center font-semibold">
            <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">03</span>
            <p className="mt-3">Años de experiencia.</p>
          </div>
          <div className="mt-6 flex flex-col items-center font-semibold">
            <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">100%</span>
            <p className="mt-3">Entrega a tiempo.</p>
          </div>
        </div>
        <div className="mt-6 laptop:hidden">
          <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">10+</span>
          <p className="mt-3">Proyectos finalizados.</p>
        </div>
        <div className="mt-6 laptop:hidden">
          <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">03</span>
          <p className="mt-3">Años de experiencia.</p>
        </div>
        <div className="mt-6 laptop:hidden">
          <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">100%</span>
          <p className="mt-3">Entrega a tiempo.</p>
        </div>
      </section>
      <footer className="antialiased px-6 py-8">
        <div className="max-[600px]:hidden flex justify-between laptop:px-10">
          <h3>Guillermo.</h3>
          <ul className="flex space-x-10 items-center">
            <li className="hover:cursor-pointer" onClick={() => HandleScrollTo(mainRef)}>Inicio</li>
            <li className="hover:cursor-pointer" onClick={() => HandleScrollTo(aboutMeRef)}>Sobre mi</li>
            <li className="hover:cursor-pointer">Contactame</li>
          </ul>
        </div>
        <div className="max-[600px]:hidden flex justify-between items-center laptop:px-10">
          <p className="mt-6 text-base">© Desarrollada por mi</p>
          <div className="flex space-x-5 mt-6">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] hover:bg-gradient-to-r hover:from-[#FF5E69] hover:to-[#B16CEA] hover:via-[#FF8A56] hover:cursor-pointer">
              <div className="p-[10px] bg-[#1C1C22] rounded-full">
                <RiTwitterXFill className="w-6 h-6 rounded-full" />
              </div>
            </div>
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] hover:bg-gradient-to-r hover:from-[#FF5E69] hover:to-[#B16CEA] hover:via-[#FF8A56] hover:cursor-pointer">
              <div className="p-[10px] bg-[#1C1C22] rounded-full">
                <RiLinkedinFill className="w-6 h-6 rounded-full" />
              </div>
            </div>
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] hover:bg-gradient-to-r hover:from-[#FF5E69] hover:to-[#B16CEA] hover:via-[#FF8A56] hover:cursor-pointer">
              <div className="p-[10px] bg-[#1C1C22] rounded-full">
                <RiInstagramLine className="w-6 h-6 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col laptop:hidden">
          <h3 className="text-xl ">Guillermo.</h3>
          <p className="mt-6 text-base">© Desarrollada por mi</p>
          <nav className="mt-6">
            <ul className="flex space-x-10 font-semibold text-base">
              <li>Inicio</li>
              <li>Sobre mi</li>
              <li>Contacto</li>
            </ul>
          </nav>
          <div className="flex space-x-5 mt-6">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56]">
              <div className="p-[10px] bg-[#1C1C22] rounded-full">
                <RiTwitterXFill className="w-6 h-6 rounded-full" />
              </div>
            </div>
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56]">
              <div className="p-[10px] bg-[#1C1C22] rounded-full">
                <RiLinkedinFill className="w-6 h-6 rounded-full" />
              </div>
            </div>
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56]">
              <div className="p-[10px] bg-[#1C1C22] rounded-full">
                <RiInstagramLine className="w-6 h-6 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
