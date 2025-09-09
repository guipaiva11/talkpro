import { useEffect } from "react"
import { useNavigate } from "react-router"


export function ErrorPage() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])
    
    return(
        <h1>Erro na página</h1>
    )
}