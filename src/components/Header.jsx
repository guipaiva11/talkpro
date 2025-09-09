import { Link } from "react-router";
import logo from "../assets/logo.png"; 

export function Header() {
  return (
    <header className="bg-white mt-6">
      <nav className="flex items-center justify-center px-8 py-4">
        
        <div className="flex items-center space-x-8 gap-8">
          
          <Link to="/">
            <img src={logo} alt="Logo" className="h-5 w-auto" />
          </Link>

          
          <ul className="flex space-x-6 text-sm text-gray-800 font-medium gap-8">
            <li>
              <Link to="/loja" className="hover:text-black">Loja</Link>
            </li>
            <li>
              <Link to="/explorar" className="hover:text-black">Explorar</Link>
            </li>
            <li>
              <Link to="/produtos" className="hover:text-black">Produtos</Link>
            </li>
            <li>
              <Link to="/entreterimento" className="hover:text-black">Entreterimento</Link>
            </li>
            <li>
              <Link to="/suporte" className="hover:text-black">Suporte</Link>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
}
