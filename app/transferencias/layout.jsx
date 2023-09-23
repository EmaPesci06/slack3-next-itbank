import NavBar from "@/components/NavBar/NavBar";

export default function TransferenciasLayout({ children }) {
    return (<div className="contenedorNyM">
        <NavBar />
        {children}
    </div>
    )
}