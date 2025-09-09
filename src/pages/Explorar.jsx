import rima from "../assets/rima.png";
import cerebro from "../assets/cerebro.png";
import afasia from "../assets/afasia.png";
import fala from "../assets/fala.png";
import musica from "../assets/musica.png";

export function Explorar() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl text-[50px] font-bold mb-2">
        A ciência por trás <br /> da inovação.
      </h2>


      <p className="text-purple-600 text-[20px] mb-14 pt-6">
        Fundamentação científica que transforma <br />
        ideias em soluções reais.
      </p>
      <p className="text-lg font-semibold text-left mb-10 text-[30px]">
        Conheça os estudos que inspiraram a <br />
        criação da nossa pulseira assistiva.
      </p>

      <div className="flex flex-col gap-6 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudyItem
            img={rima}
            title="Explorando a rima como recurso da gamificação na reabilitação de afasias"
            year="2024"
          />
          <StudyItem
            img={cerebro}
            title="Intervenções em afasia: uma revisão integrativa"
            year="2016"
          />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudyItem
            img={fala}
            title="Avaliação discursiva das afasias"
            year="2017"
          />
          <StudyItem
            img={afasia}
            title="Afasias: Considerações acerca do processo de reabilitação"
            year="2016"
          />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StudyItem
            img={musica}
            title="A música por uma ótica neurocientífica"
            year="2013"
          />
        </div>
      </div>
    </section>
  );
}


function StudyItem({ img, title, year }) {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <img src={img} alt={title} className="w-14 h-14 object-contain" />
      <div className="flex-1">
        <p className="text-sm underline font-medium">{title}</p>
        <p className="text-xs mt-1">{year}</p>
      </div>
    </div>
  )
}