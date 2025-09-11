import { Link } from "react-router";
import logo from "../assets/logo.png";
import logobrancagrande from "../assets/logobrancagrande.png"
import { MoonStarsIcon, SunIcon, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");
    if (theme === "dark") {
      tagHTML.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
  }

  return (
    <div className="dark:bg-black dark:text-white">
      <header className="bg-white pt-10 dark:bg-black relative">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/">
            {theme === "dark" ? (
              <img src={logobrancagrande} alt="Logo" className="h-6 w-auto" />
            ) : (
              <img src={logo} alt="Logo" className="h-5 w-auto" />
            )}
          </Link>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 dark:text-white">
            <li>
              <Link to="/loja" className="hover:text-black dark:hover:text-white">Loja</Link>
            </li>
            <li>
              <Link to="/explorar" className="hover:text-black dark:hover:text-white">Explorar</Link>
            </li>
            <li>
              <Link to="/produtos" className="hover:text-black dark:hover:text-white">Produtos</Link>
            </li>
            <li>
              <Link to="/entreterimento" className="hover:text-black dark:hover:text-white">Entretenimento</Link>
            </li>
            <li>
              <Link to="/suporte" className="hover:text-black dark:hover:text-white">Suporte</Link>
            </li>
          </ul>

          {/* Botões: tema e menu */}
          <div className="flex items-center gap-4">
            {/* Tema */}
            <button className="cursor-pointer" onClick={toggleTheme}>
              {theme === "dark" ? (
                <SunIcon size={28} weight="fill" />
              ) : (
                <MoonStarsIcon size={28} weight="fill" />
              )}
            </button>

            {/* Botão hamburguer - visível no mobile */}
            <button className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
              <List size={28} weight="bold" />
            </button>
          </div>
        </nav>

        {/* Menu lateral (off-canvas mobile) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-black dark:text-white">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 px-6 text-sm font-medium text-gray-800 dark:text-white">
            <li>
              <Link to="/loja" onClick={() => setIsMenuOpen(false)}>Loja</Link>
            </li>
            <li>
              <Link to="/explorar" onClick={() => setIsMenuOpen(false)}>Explorar</Link>
            </li>
            <li>
              <Link to="/produtos" onClick={() => setIsMenuOpen(false)}>Produtos</Link>
            </li>
            <li>
              <Link to="/entreterimento" onClick={() => setIsMenuOpen(false)}>Entretenimento</Link>
            </li>
            <li>
              <Link to="/suporte" onClick={() => setIsMenuOpen(false)}>Suporte</Link>
            </li>
          </ul>
        </div>

        {/* Fundo escurecido quando menu está aberto */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </header>
    </div>
  );
}
