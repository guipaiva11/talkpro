import silentReignImg from "../assets/silent-reign.png";

export function Entreterimento() {
  return (
    <section className="w-full text-center dark:bg-black dark:text-white">
      <div className="w-full max-w-4xl mx-auto pt-10 px-4">
        <img src={silentReignImg} alt="Silent Reign" className="w-full" />
      </div>
      <div className="mt-10 px-4">
        <h2 className="text-2xl  text-[30px] font-bold leading-snug">
          Ritmo. Risco. <br />
          Resistência. A fala é <br />
          a nova arma.
        </h2>
        <p className="text-sm text-gray-700 mt-4 max-w-md mx-auto dark:text-white pb-10">
          Um reino dominado pelo silêncio. Uma tecnologia esquecida. A <br className="hidden sm:inline" />
          última chance de restaurar a voz da humanidade.
        </p>
      </div>
    </section>
  );
}
