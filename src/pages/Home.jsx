import React from "react";
import logo from "../assets/logoGrande.png";
import watchHero from "../assets/RelogioGrande.png";
import lineup from "../assets/lineup.png";
import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";
import feature3 from "../assets/feature-3.png";
import feature4 from "../assets/Treinamento.png";
import feature7 from "../assets/feature-7.png";
import feature8 from "../assets/feature-8.png";
import feature10 from "../assets/feature-10.png";


export function Home() {
  return (
    <div className="w-full font-sans text-gray-900">
      <header className="flex flex-col items-center py-6 gap-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 pt-12"flex>
            <img src={logo} alt="Talk Pro Logo" className="h-8 " />
            <p className="text-[30px] font-bold ">TALK PRO</p>
        </div>
        <p className="text-lg text-gray-700 text-center">Pra quem tem muito a dizer. Do seu jeito.</p>
      </header>

      
      <section className="w-full">
        <img src={watchHero} alt="Smartwatch Hero" className="w-full object-cover" />
      </section>

      
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl text-[40px] font-bold ">Comunicar nunca foi<br />tão pessoal.</h2>
          <p className="text-sm text-gray-600 text-[15px] mt-5">Qual tom fala por você?</p>
          <img src={lineup} alt="Watch Color Lineup" className="mx-auto mt-6 max-w-xl" />
        </div>
      </section>
      <div className="w-full font-sans text-gray-900 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="md:col-span-2 bg-gradient-to-b from-purple-200 to-purple-500 rounded-xl p-4 text-left text-sm font-semibold">
           <div>
                <p className="text-[30px]">Visibilidade e resistência <br /> com tela LCD.</p>
                <img src={feature1} alt="Visibilidade e resistência" className="mt-4 mx-auto max-w-[150px]" />
           </div>
        </div>

        <div className="bg-gradient-to-b from-purple-200 to-purple-500 rounded-xl p-4 text-left text-sm font-semibold">
            <p className="text-[20px]">Comunicação <br /> facilitada e intuitiva.</p>
            <img src={feature2} alt="Comunicação" className="mt-4 mx-auto max-w-[150px]" />
        </div>

        <div className="bg-gradient-to-b from-purple-200 to-purple-500 rounded-xl p-4 text-left text-sm font-semibold">
            <p className="text-[20px]"> Feedback sonoro <br /> imediato.</p>
            <img src={feature3} alt="Feedback sonoro" className="mt-4 mx-auto max-w-[120px]" />
        </div>
    </section>

      
      <section className="mt-6 bg-gradient-to-b from-purple-100 to-purple-300 rounded-xl p-4 text-left text-sm font-semibold">
        Treinamento personalizado de palavras.
        <div className="flex justify-center mt-4 gap-4">
          <img src={feature4} alt="Treinamento" className="max-w-[80px]" />
        </div>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="bg-gradient-to-b from-purple-200 to-purple-400 rounded-xl p-4 text-left text-xs font-semibold">
          Inclusão para todos os perfis.
          <img src={feature8} alt="Inclusão" className="mt-4 mx-auto max-w-[120px]" />
        </div>

        <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl p-4 text-left text-xs font-semibold text-white">
          Modo emergência: <br /> segurança no seu pulso.
          <img src={feature7} alt="Modo emergência" className="mt-4 mx-auto max-w-[100px]" />
        </div>
      </section>

      
      <section className="mt-10 text-center px-6">
        <h2 className="text-lg font-semibold text-purple-700">
          Parece smart,<br /> mas é ainda mais inteligente.
        </h2>
        <p className="mt-2 text-xs text-gray-600 max-w-md mx-auto">
          Mais acessível que um smartwatch. Mais humano que qualquer app.
        </p>
      </section>

      
      <section className="bg-gray-900 rounded-xl mt-10 p-6 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="md:max-w-lg">
          <h3 className="text-xl font-semibold mb-3">
            Tecnologia que fala a sua língua.
          </h3>
          <p className="text-sm">
            A TALK PRO é um sistema auditivo feito para quem precisa de suporte com comunicação funcional.
            <br />
            Controle uma comunidade única, de todas as suas conversas e sentimentos, em tempo real.
            <br />
            Experimente segurança e conforto com um produto acessível que te ajuda no dia a dia.
          </p>
        </div>
        <img src={feature10} alt="Tecnologia" className="mt-6 md:mt-0 max-w-[200px]" />
      </section>
    </div>
      
    </div>
  );
}
