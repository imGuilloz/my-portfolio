import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";

export default function page() {
  return (
    <>
      <header className="px-6 py-8">
        <nav className="text-slate-300 left-0 overflow-y-scroll">
          <div className="flex items-center justify-between">
            <span className="text-xl bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold bg-clip-text text-transparent">Guillermo.</span>
            <RiMenu3Fill className="w-5 h-5" />
          </div>
        </nav>
        <main>
          <div className="flex flex-col justify-center items-center mt-20 text-center">
            <Image
              className="rounded-full"
              src={'https://media.licdn.com/dms/image/D4D03AQFY0XIlyMCTHw/profile-displayphoto-shrink_400_400/0/1714443667708?e=1720656000&v=beta&t=leAjIu7wdDV5r8NF9D1lCybAwBI9bRF-ul9V0-rpQfY'}
              width={170}
              height={170}
              alt="Foto de perfil"
            />
            <h2 className="text-4xl mt-10 font-semibold text-left"><span className="font-semibold bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] bg-clip-text text-transparent">Hola, soy Guillermo</span> <br /> un desarrollador Front-End</h2>
            <p className="mt-10 text-left">Me gusta programar paginas web atractivas para generar una experiencia increible.</p>
          </div>
          <div className="flex flex-col">
            <button
              className="bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold rounded-full text-2xl text-white w-48 py-3 mt-8"
            >
              Contactame
            </button>
            <button
              className="border-[1px] rounded-full py-3 mt-4 w-60 font-semibold text-2xl"
            >
              Proyectos
            </button>
          </div>
        </main>
      </header>
      <section className="bg-[#1C1C22] w-screen h-screen antialiased px-4 py-8">
        <p className="text-4xl">
          Creando experiencias digitales,
          <span className="text-4xl bg-gradient-to-r from-[#B16CEA] to-[#FF5E69] via-[#FF8A56] font-semibold bg-clip-text text-transparent"> <br />Resolviendo problemas reales.</span>
        </p>

      </section>
    </>
  )
}
