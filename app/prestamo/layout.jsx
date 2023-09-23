import NavBar from "@/components/NavBar/NavBar";

export default function PrestamoLayout({ children }) {
    return (<div className="contenedorNyM">
        <NavBar />
        {children}
    </div>
    )
}