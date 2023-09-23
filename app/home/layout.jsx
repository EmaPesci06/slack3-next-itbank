import NavBar from "@/components/NavBar/NavBar";

export default function HomeLayout({ children }) {
    return (<div className="contenedorNyM">
        <NavBar />
        {children}
    </div>
    )
}