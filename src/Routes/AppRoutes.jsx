import { Routes, Route } from "react-router"
import { Home } from "../pages/Home"
import { Loja } from "../pages/Loja"
import { Entreterimento } from "../pages/Entreterimento"
import { Explorar } from "../pages/Explorar"
import { Produtos } from "../pages/Produtos"
import { Suporte } from "../pages/Suporte"
import { ErrorPage } from "../pages/ErrorPage"
import { Layout } from "../components/Layout"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>"
                <Route path="/" index element={<Home />} />
                <Route path="/loja" element={<Loja />} />
                <Route path="/explorar" element={<Explorar />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/entreterimento" element={<Entreterimento />} />
                <Route path="/suporte" element={<Suporte />} />
            </Route>
                <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}