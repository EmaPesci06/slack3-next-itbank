import NavBar from "@/components/NavBar/NavBar";

export default function CuentasLayout({ children }) {
    return (<div className="contenedorNyM">
        <NavBar />
        {children}
    </div>
    )
}