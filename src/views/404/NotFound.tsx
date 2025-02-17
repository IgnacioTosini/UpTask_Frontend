import { Link } from "react-router-dom"
import { SEO } from "@/components/SEO"

export const NotFound = () => {
    return (
        <>
            <SEO
                title="Página no encontrada - UpTask"
                description="La página que buscas no existe en UpTask."
                image="/404.png?url"
                url="https://up-task-frontend-tawny.vercel.app/404"
            />
            <h1 className="font-black text-center text-4xl text-white">Página no encontrada</h1>
            <p className="mt-10 text-center text-white">
                Tal vez quieras volver a {''}
                <Link className="text-fuchsia-500" to={'/'}>Proyectos</Link>
            </p>
        </>
    )
}