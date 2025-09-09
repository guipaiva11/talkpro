import parafuso from "../assets/parafuso.png";
import fita from "../assets/fita.png";
import chave from "../assets/chave.png";
import botoes from "../assets/botoes.png";
import fios from "../assets/fios.png";
import led from "../assets/led.png";
import talkpro from "../assets/talkpro.png";

export function Produtos() {
    return (
        <section className="w-full text-center">
            <div className="py-10 px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Essenciais e estratégicos.</h2>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Encontre os materiais, componentes e ferramentas que deram vida ao nosso projeto — e podem dar vida ao seu também.
                </p>
            </div>

            <div className="bg-gray-200 py-8 px-4">
                <h3 className="text-lg font-semibold mb-6">Essenciais que movem ideias.</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <ProductCard image={parafuso} name="Parafusos" price="R$ 40" />
                    <ProductCard image={fita} name="Fita dupla face" price="R$ 30" />
                    <ProductCard image={chave} name="Chaves de montagem" price="R$ 50" />
                </div>
            </div>

            <div className="bg-gray-200 py-8 px-4">
                <h3 className="text-lg font-semibold mb-6">Interação e Controle</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <ProductCard image={botoes} name="Botões táteis" price="R$ 60" />
                    <ProductCard image={fios} name="Fios" price="R$ 40" />
                    <ProductCard image={led} name="LED" price="R$ 100" />
                </div>
            </div>

            <div className="bg-white-100 py-12 px-4">
                <h3 className="text-lg font-semibold mb-6">A expressão máxima.</h3>
                <div className="flex justify-center">
                    <ProductCard image={talkpro} name="Talk Pro" price="R$ 180" />
                </div>
            </div>
        </section>
    );
}

function ProductCard({ image, name, price }) {
    return (
        <div className="bg-blue-50 rounded-xl shadow-sm p-6 flex flex-col items-center">
            <img src={image} alt={name} className="w-24 h-24 object-contain mb-4" />
            <p className="text-sm font-medium">{name}</p>
            <p className="text-sm font-medium">{price}</p>
        </div>
    );
}
