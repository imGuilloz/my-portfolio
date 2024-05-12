import Image from "next/image";
import { RiMenu3Fill, RiLinkedinFill, RiInstagramLine, RiTwitterXFill } from "react-icons/ri";

export default function page() {
  return (
    <>
      <header className="px-6 py-8 laptop:px-16">
        <nav className="text-slate-300 left-0">
          <div className="max-[600px]:hidden flex justify-between">
            <ul className="flex space-x-10 items-center">
                <li className="text-xl font-semibold">Guillermo.</li>
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Proyectos</li>
                <li>Sobre mi</li>
            </ul>
            <div className="flex items-center">
              <button className="rounded-full bg-[#FFF] px-4 py-3 text-[#1C1C22] font-semibold">Contactame</button>
            </div>
          </div>
          <div className="flex items-center justify-between laptop:hidden">
            <span className="text-xl bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold bg-clip-text text-transparent">Guillermo.</span>
            <RiMenu3Fill className="w-5 h-5 laptop:hidden" />
          </div>
        </nav>
      </header>
      <main className="px-6 py-10 laptop:px-16 laptop:py-14">
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            className="rounded-full laptop:hidden"
            src={'https://media.licdn.com/dms/image/D4D03AQFY0XIlyMCTHw/profile-displayphoto-shrink_400_400/0/1714443667708?e=1720656000&v=beta&t=leAjIu7wdDV5r8NF9D1lCybAwBI9bRF-ul9V0-rpQfY'}
            width={170}
            height={170}
            alt="Foto de perfil"
          />
          <Image 
            className="max-[600px] rounded-full"
            src={'https://media.licdn.com/dms/image/D4D03AQFY0XIlyMCTHw/profile-displayphoto-shrink_400_400/0/1714443667708?e=1720656000&v=beta&t=leAjIu7wdDV5r8NF9D1lCybAwBI9bRF-ul9V0-rpQfY'}
            width={230}
            height={230}
            alt="Foto de perfil"
          />
          <h2 className="text-4xl mt-10 font-semibold text-left laptop:text-5xl laptop:text-center"><span className="font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">Hola, soy Guillermo</span> <br /> un desarrollador Front-End</h2>
          <p className="mt-10 text-left">Me gusta programar paginas web atractivas para generar una experiencia increible.</p>
        </div>
        <div className="flex flex-col laptop:flex-row laptop:mt-10 space-x-5 justify-center">
          <button
            className="bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold rounded-full text-2xl text-white w-48 py-3 mt-8 laptop:bg-[#FFF] laptop:mt-0"
          >
            Contactame
          </button>
          <button
            className="border-[1px] rounded-full py-3 mt-4 w-60 font-semibold text-2xl laptop:w-48 laptop:mt-0"
          >
            Proyectos
          </button>
        </div>
      </main>
      <section className="bg-[#1C1C22] w-screen h-screen antialiased px-6 py-8">
        <div className="flex flex-col mt-5">
          <span className="text-2xl font-semibold text-right">Desarrollando experiencias</span>
          <span className="font-semibold text-2xl text-right">digitales que,</span>
          <span className="text-2xl text-right bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold bg-clip-text text-transparent">resuelven problemas reales.</span>
        </div>
        <ul className="flex flex-col mt-10 text-2xl p-5">
          <li className="group relative p-10 border-t-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">Diseño responsivo</span></li>
          <li className="group relative p-10 border-t-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">Front-End</span></li>
          <li className="group relative p-10 border-t-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">Hosting</span></li>
          <li className="group relative p-10 border-t-[1px] border-b-[1px] inline-flex items-center justify-center overflow-hidden font-medium text-neutral-50 hover:cursor-pointer"><span className="absolute h-0 w-0 bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] transition-all duration-300 group-hover:h-full group-hover:w-full"></span><span className="relative">SEO</span></li>
        </ul>
      </section>
      <section className="w-screen antialiased px-6 py-8">
        <div>
          <h3 className="text-4xl font-semibold">Mira mis<br /><span className="bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">proyectos.</span></h3>
          <div className="mt-10 grid grid-cols-1 gap-4 justify-center ">
            <div className="rounded-md bg-[#1C1C22]">
              <Image
                className="w-full h-52 rounded-t-md"
                src={'https://i.imgur.com/oeMGHqE.png'}
                width={170}
                height={170}
                alt="Foto de primer proyecto"
              />
              <div className="flex flex-col space-y-3 p-5">
                <h3 className="font-semibold">Trips Landing Page</h3>
                <p>HTML, CSS, JavaScript</p>
              </div>
            </div>
            <div className="rounded-md bg-[#1C1C22]">
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
            </div>
            <div className="rounded-md bg-[#1C1C22]">
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
            </div>
            <div className="rounded-md bg-[#1C1C22]">
              <Image
                className="w-full h-52 rounded-t-md"
                src={'https://i.imgur.com/R7D0G5O.png'}
                width={170}
                height={170}
                alt="Foto de perfil"
              />
              <div className="flex flex-col space-y-3 p-5">
                <h3 className="font-semibold">Cooking Recipes</h3>
                <p>React, JavaScript, Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1C1C22] h-screen w-screen antialiased px-6 py-8">
        <h3 className="text-4xl font-semibold">Guillermo Olvera</h3>
        <p className="mt-6">
          Hola, soy un desarrollador web con más de 3 años de experiencia.
          <br />
          <br />
          Tengo conocimientos en tecnologias como: HTML, CSS, JavaScript,
          TypeScript, React, NextJs, Tailwind, Git, GitHub, NPM, Jira y Trello.
          <br />
          <br />
          Dos frases que más me identifican son: &quot;No te rindas&quot; y <i>&quot;Si puedes imaginarlo puedes programarlo&quot;.</i>
        </p>
        <div className="mt-6">
          <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">10+</span>
          <p className="mt-3">Proyectos finalizados.</p>
        </div>
        <div className="mt-6">
          <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">03</span>
          <p className="mt-3">Años de experiencia.</p>
        </div>
        <div className="mt-6">
          <span className="text-4xl font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">100%</span>
          <p className="mt-3">Entrega a tiempo.</p>
        </div>
      </section>
      <footer className="antialiased px-6 py-8">
        <div className="flex flex-col">
          <h3 className="text-xl">Guillermo.</h3>
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
