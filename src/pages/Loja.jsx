import React from "react";
import watchImage from "../assets/watch-banner.png";
import ferramentasImg from "../assets/ferramentas.png";
import componentesImg from "../assets/componentes.png";
import pulseirasImg from "../assets/pulseiras.png";

export function Loja() {
  return (
    <div className="w-full">
      {/* Título principal */}
      <div className="text-left px-4 md:px-12 py-8">
        <h1 className="text-3xl text-[50px] font-semibold pt-10">
          Inovação <br /> <span className="text-gray-400">além do horizonte.</span>
        </h1>
        <h2 className="text-center text-xl  text-[50px] font-semibold mt-12">Talk Pro</h2>
      </div>

      {/* Imagem do relógio */}
      <div className="w-full">
        <img src={watchImage} alt="Talk Pro" className="w-full object-cover" />
      </div>

      {/* Tecnologia por trás */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-12 py-10  p-30 items-start md:items-center">
        <div>
          <h3 className="text-xl text-xl  text-[30px] font-semibold mb-2">
            Conheça a tecnologia <br /> por trás dessa pulseira <br />assistiva
          </h3>
        </div>
        <div>
          <p className="text-sm text-xl  text-[15px] font-semibold mt-12">Valor estimado: R$ 750</p>
        </div>
      </div>

      {/* Blocos das peças */}
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-12">
        {/* Ferramentas */}
        <div className="flex-1 bg-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
          <img src={ferramentasImg} alt="Ferramentas" className="w-24 mb-3" />
          <div>
            <h4 className="font-semibold">Ferramentas e peças menores</h4>
            <p className="text-sm">Garantem montagem e fixação.</p>
          </div>
        </div>

        {/* Componentes */}
        <div className="flex-1 bg-gray-200 rounded-lg p-4 flex flex-col items-center text-center">
          <img src={componentesImg} alt="Componentes" className="w-24 mb-3" />
          <div>
            <h4 className="font-semibold">Componentes</h4>
            <p className="text-sm">Tornam a pulseira inteligente e acessível.</p>
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <hr className="my-12 border-gray-300 mx-4 md:mx-12" />

      {/* Seção: Por que comprar */}
      <div className="bg-gray-200 py-30 px-10 md:px-12 ">
        <h3 className=" text-[35px]  font-bold mb-6">
          Por que comprar sua <br />
          <span className="text-purple-700">Talk Pro na Horizon?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-lg p-10">
            <h4 className="font-semibold mb-2">Apoio à comunicação</h4>
            <p className="text-sm text-gray-600">
              Facilita a fala para pessoas com afasia e outras dificuldades de
              comunicação.
            </p>
          </div>

          <div className="bg-white rounded-lg p-10">
            <h4 className="font-semibold mb-2">Tecnologia acessível e intuitiva</h4>
            <p className="text-sm text-gray-600">
              Botões táteis, palavras pré-programadas e interface simples.
            </p>
          </div>

          <div className="bg-white rounded-lg p-10">
            <h4 className="font-semibold mb-2">Segurança em emergências</h4>
            <p className="text-sm text-gray-600">
              Botão de alerta para situações críticas, com envio de localização.
            </p>
          </div>
        </div>
      </div>
      <section className="w-full px-4 md:px-12 py-12 flex flex-col items-center text-center">
      {/* Título */}
      <h2 className=" text-[40px] font-bold mb-8 pt-20 pb-20">
        Essenciais para a <br className="md:hidden" /> sua Talk Pro.
      </h2>

      {/* Imagem das pulseiras */}
      <img
        src={pulseirasImg}
        alt="Pulseiras da Talk Pro"
        className="w-full max-w-3xl object-contain"
      />

      {/* Legenda */}
      <p className="text-sm text-black mt-6 max-w-xl">
        Pulseiras disponíveis nas cores preto, branco, verde, azul e rosa —
        escolha a sua e destaque seu estilo!
      </p>
    </section>  
    </div>
    
  );
}