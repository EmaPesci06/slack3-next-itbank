import NavBar from "@/components/NavBar/NavBar";

export default function PagosLayout({ children }) {
    return (<div className="contenedorNyM">
        <NavBar />
        {children}
    </div>
    )
}