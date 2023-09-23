import NavBar from "@/components/NavBar/NavBar";

export default function MonedaLayout({ children }) {
    return (<div className="contenedorNyM">
        <NavBar />
        {children}
    </div>
    )
}