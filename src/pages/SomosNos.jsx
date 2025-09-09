import React from "react";
import img1 from "../assets/Sarah.png";
import img2 from "../assets/Marcela.png";
import img3 from "../assets/Matheus.png";
import img4 from "../assets/Guilherme.png";
import img5 from "../assets/Kaio.png";

export  function SomosNos() {
  const team = [
    {
      name: "Sarah Kasayguth",
      role: "Designer visual (UI) e pesquisadora em acessibilidade.",
      image: img1,
    },
    {
      name: "Marcelo Rodrigues",
      role: "Desenvolvedor front-end e designer UX. Pesquisa tecnologias assistivas.",
      image: img2,
    },
    {
      name: "Matheus Schramli",
      role: "Criador e desenvolvedor. É interessado em comportamento humano e comunicação.",
      image: img3,
    },
    {
      name: "Guilherme Paiva",
      role: "Suporte técnico, gravação e edição de conteúdo multimídia.",
      image: img4,
    },
    {
      name: "Kaio Rocha",
      role: "Desenvolvedor full-stack e criador da IA. Gosta de simplificar sistemas.",
      image: img5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-2">Quem somos</h2>
      <p className="text-sm text-gray-700 max-w-2xl mb-6">
        Somos a Horizon, um grupo jovem focado em desenvolver soluções tecnológicas com impacto social.
        Nosso principal projeto, a pulseira assistiva Talk Pro, foi criado para ajudar pessoas com afasia
        e outras dificuldades de fala a se comunicarem com mais autonomia.
      </p>

      <hr className="my-8 border-gray-300" />

      <h3 className="text-2xl font-bold mb-6">Time</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 hover:shadow-lg transition rounded-lg"
          >
            <img
              src={person.image}
              alt={person.name}
              className="rounded-md w-40 h-auto object-cover mb-3 border-2 border-transparent hover:border-blue-500"
            />
            <h4 className="font-semibold">{person.name}</h4>
            <p className="text-sm text-gray-600">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
