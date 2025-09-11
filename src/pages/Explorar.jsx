import rima from "../assets/rima.png";
import cerebro from "../assets/cerebro.png";
import afasia from "../assets/afasia.png";
import fala from "../assets/fala.png";
import musica from "../assets/musica.png";

import { Link } from "react-router";

export function Explorar() {
  return (
    <section className="w-full  mx-auto px-4 py-16 text-center dark:bg-black dark:text-white">
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
          <Link to="https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/submissoes/artigo-daae3ef72f6b2e038fb8a9348871203d46554751-arquivo_revisado.pdf"
          target="_blank">
            <StudyItem
              img={rima}
              title="Explorando a rima como recurso da gamificação na reabilitação de afasias"
              year="2024"
            />
          </Link>
          <Link to="https://www.scielo.br/j/rcefac/a/xdSTnMzwDxY9s6pYcP4ZvKm/?lang=pt"
          target="_blank">
            <StudyItem
              img={cerebro}
              title="Intervenções em afasia: uma revisão integrativa"
              year="2016"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link  to="https://editora.sepq.org.br/rpq/article/view/93"
          target="_blank">
            <StudyItem
              img={fala}
              title="Avaliação discursiva das afasias"
              year="2017"
            />
          </Link>
          
          <Link to="https://repositorio.pgsscogna.com.br/bitstream/123456789/47769/1/Afasias%20-%20artigo.pdf"
          target="_blank">
            <StudyItem
              img={afasia}
              title="Afasias: Considerações acerca do processo de reabilitação"
              year="2016"
            />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="https://www.scielo.br/j/pm/a/4MYkTmWFfsG4P9jfRMdmh4G/?lang=pt"
          target="_blank">
            <StudyItem
              img={musica}
              title="A música por uma ótica neurocientífica"
              year="2013"
            />
          </Link>

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