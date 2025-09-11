import { Link } from "react-router";

export  function Footer() {
    return (
      <footer className="bg-gray-200 px-6 py-10 text-sm text-gray-700 dark:bg-[rgba(29,29,31,1)] dark:text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 border-t border-gray-400 pt-8 ">
  
          
          <div className="grid grid-cols-3 gap-6 dark:text-white">
            <div>
              <h3 className="font-semibold mb-2">Produtos</h3>
              <p className="text-gray-500 dark:text-white">Talk Pro</p>
            </div>
  
            <div>
              <h3 className="font-semibold mb-2">Sobre a Horizon</h3>
              <Link to="/somosnos" className="text-gray-500 dark:text-white">Quem somos</Link>
            </div>
  
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Estudantes</h3>
              <ul className="space-y-1 text-gray-500 dark:text-white">
                <li>Apresentações</li>
                <li>Comunicação</li>
                <li>Design</li>
                <li>Redação</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-2">Para empresas</h3>
              <ul className="space-y-1 text-gray-500 dark:text-white">
                <li>Branding</li>
                <li>Parcerias</li>
                <li>Social Mídia</li>
                <li>Suporte</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold mb-2">Valores da Horizon</h3>
              <ul className="space-y-1 text-gray-500 dark:text-white">
                <li>Acessibilidade</li>
                <li>Compromisso</li>
                <li>Futuro</li>
                <li>Inovação</li>
              </ul>
            </div>
          </div>
  
          
          <div className="border-l border-gray-400 pl-8">
            <h3 className="font-semibold mb-2">Dúvidas e Sugestões</h3>
            <p className="text-gray-500 mb-4 text-sm dark:text-white">
              Caso tenha alguma dúvida ou queira nos enviar uma sugestão, por favor, preencha o formulário ao lado. Estamos à disposição para ajudar.
            </p>
  
            <form className="space-y-4">
              <input
                type="email"
                value="horizontcc@gmail.com"
                readOnly
                className="w-full p-2 bg-gray-300 rounded-md  dark:bg-[rgba(217,217,217,0.2)]"
              />
              <textarea
                rows="3"
                placeholder="Dúvida ou sugestão."
                className="w-full p-2 bg-gray-300 rounded-md resize-none dark:text-white  dark:bg-[rgba(217,217,217,0.2)]"
              />
              <button
                type="button"
                className="bg-white text-black font-semibold px-4 py-1 rounded-md shadow border hover:bg-gray-100"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
  
        
        <div className="mt-10 text-xs flex justify-between">
          <p>© 2025 Horizon Inc. Todos os direitos reservados.</p>
          <p>Brasil</p>
        </div>
      </footer>
    );
  }
  