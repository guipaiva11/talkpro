import logo from "../assets/logo.png";
import watchHero from "../assets/RelogioGrande.png";
import lineup from "../assets/lineup.png";
import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";
import feature3 from "../assets/feature-3.png";
import feature4 from "../assets/Treinamento.png";
import feature7 from "../assets/feature-7.png";
import feature8 from "../assets/feature-8.png";
import feature10 from "../assets/feature-10.png";

import { useEffect, useState } from "react";
import logobrancagrande from "../assets/logobrancagrande.png"

export function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Checa se a classe 'dark' está presente no <html>
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    
    checkDarkMode();

    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="w-full font-sans text-gray-900 dark:bg-black dark:text-white">
      <header className="flex flex-col items-center py-6 gap-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 pt-12" flex>
        <img
            src={isDark ? logobrancagrande : logo}
            alt="Talk Pro Logo"
            className="h-8"

          />
          <p className="text-[30px] font-bold  ">TALK PRO</p>
        </div>
        <p className="text-lg text-gray-700 text-center dark:text-white">Pra quem tem muito a dizer. Do seu jeito.</p>
      </header>


      <section className="w-full">
        <img src={watchHero} alt="Smartwatch Hero" className="w-full object-cover" />
      </section>


      <section className="bg-gray-100 py-10 dark:bg-[linear-gradient(to_bottom,black,rgba(78,78,78,1))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl text-[40px] font-bold ">Comunicar nunca foi<br />tão pessoal.</h2>
          <p className="text-sm text-gray-600 text-[15px] mt-5">Qual tom fala por você?</p>
          <img src={lineup} alt="Watch Color Lineup" className="mx-auto mt-6 max-w-xl" />
        </div>
      </section>

      <div className="w-full font-sans text-gray-900 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">


        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
          <div className="md:col-span-2 bg-gradient-to-b from-purple-200 to-purple-500 rounded-xl p-4 text-left text-sm font-semibold dark:bg-[linear-gradient(to_bottom,rgba(230,232,255,1),rgba(123,105,153,1))]">
            <div className="flex  justify-between pl-5 pr-10">
              <p className="text-[30px] ">Visibilidade e resistência <br /> com tela LCD.</p>
              <img src={feature1} alt="Visibilidade e resistência" className="mt-8 h-70" />
            </div>
          </div>

          <div className="bg-gradient-to-b from-purple-200 to-purple-500 rounded-xl p-4 text-left text-sm font-semibold mt-5 dark:bg-[linear-gradient(to_top,rgba(70,1,250,1),rgba(204,175,255,1),rgba(230,232,255,1))] dark:bg-[linear-gradient(to_top,rgba(70,1,250,1),rgba(204,175,255,1),rgba(230,232,255,1))]">
            <div className="">
              <p className="text-2xl text-[22px] font-bold">Comunicação <br /> facilitada e intuitiva.</p>
              <img src={feature2} alt="Comunicação" className="mt-4 mx-auto max-w-[150px]" />
            </div>
          </div>

          <div className="bg-gradient-to-b from-purple-200 to-purple-500 rounded-xl p-4 text-left text-sm font-semibold mt-5">
            <div>
              <p className="text-2xl text-[22px] font-bold"> Feedback sonoro <br /> imediato.</p>
              <img src={feature3} alt="Feedback sonoro" className="mt-4 mx-auto max-w-[150px]" />
            </div>
          </div>
        </section>

        <section className="mt-8 bg-gradient-to-b from-purple-100 to-purple-300 rounded-xl p-4 text-left text-sm font-semibold dark:bg-[linear-gradient(to_bottom,rgba(230,232,255,1),rgba(123,105,153,1))]">
          <div className=" flex justify-center">
            <p className="text-2xl text-[25px] font-bold">Treinamento personalizado de palavras.</p>
          </div>
          <div className="flex justify-center mt-8 gap-4 ">
            <img src={feature4} alt="Treinamento" className="max-w-[250px]" />
          </div>
        </section>


        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-b from-purple-200 to-purple-400 rounded-xl p-4 text-left text-xs font-semibold">
            <div>
              <p className="text-2xl text-[22px] font-bold"> Inclusão para todos <br /> os perfis.</p>
              <img src={feature8} alt="Feedback sonoro" className="mt-2 mx-auto max-w-[350px]" />
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl p-4 text-left text-xs font-semibold text-white dark:bg-[linear-gradient(to_bottom,rgba(230,232,255,1),rgba(123,105,153,1))]">
            <div>
              <p className="text-2xl text-[22px] font-bold"> Modo emergência: <br /> segurança no seu <br />pulso.</p>
              <img src={feature7} alt="Feedback sonoro" className="mt-4 mx-auto max-w-[120px]" />
            </div>
          </div>
        </section>


        <section className="mt-6 text-center px-4">
          <h2 className="text-lg font-semibold text-purple-700 text-[50px]">
            Parece smart,<br /> mas é ainda mais <br />inteligente.
          </h2>
          <p className="mt-4 text-[22px] pb-4  text-black-900 dark:text-white">
            Mais acessível que um smartwatch. Mais humano que qualquer app.
          </p>
        </section>


        <section className="w-full  py-20  flex justify-center">
          <div className="bg-[#1A1A1A] text-white rounded-2xl px-10 py-8 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold mb-4">
                Tecnologia que fala <br /> a sua língua.
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                A Talk Pro é uma pulseira assistiva feita para quem precisa se comunicar com clareza, sem complicação. <br /><br />
                Diferente dos smartwatches caros e cheios de funções que ninguém usa, ela entrega o essencial: praticidade, segurança e inclusão. <br /><br />
                Simples de usar. Poderosa ao se expressar.
              </p>
            </div>

            
            <div className="flex-1 flex justify-center">
              <img src={feature10} alt="Relógio Talk Pro" className="max-w-xs w-full" />
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
