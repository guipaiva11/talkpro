export function Suporte() {
    return (
      <section className="w-full px-4 py-10 text-center dark:bg-black dark:text-white">

        <h2 className="text-2xl font-bold mb-8">Suporte da Horizon</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-8">

          <div className="bg-indigo-100 rounded-xl p-6 w-full md:w-80 text-left shadow dark:bg-[rgba(230,232,255,0.6)]">
            <h3 className="font-semibold text-lg mb-2">Precisa de ajuda?</h3>
            <p className="text-sm pb-3">Leia o manual da Talk Pro</p>
            <a href="/manual">
                <button className="bg-white text-black  px-2 py-2 rounded hover:bg-gray-100 transition dark:bg-black dark:text-white">
                    Manual
                </button>
            </a>
          </div>
          <div className="bg-indigo-100 rounded-xl p-6 w-full md:w-80 text-left shadow dark:bg-[rgba(230,232,255,0.6)]">
            <h3 className="font-semibold text-lg mb-2">Como configurar sua Talk Pro</h3>
            <div className=" dark:bg-black dark:text-white w-full h-20 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-sm">
              Vídeo
            </div>
          </div>
        </div>
        <div className="bg-indigo-100  rounded-xl p-6 max-w-2xl mx-auto text-left shadow dark:bg-[rgba(230,232,255,0.6)]">
          <h3 className="font-semibold text-lg mb-2">Garantia e Trocas</h3>
          <p className="text-sm leading-relaxed">
            Oferecemos 1 ano de garantia contra defeitos de fabricação na Talk Pro. <br />
            Trocas podem ser solicitadas em até 7 dias após o recebimento, com o produto intacto e na embalagem original. <br />
            Nosso suporte também está disponível para dúvidas sobre os serviços prestados, como trabalhos acadêmicos, redações e apresentações em slides.
          </p>
        </div>
      </section>
    );
  }
  