import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import { Pagos } from "@/components/Pagos/Pagos";

export default function PagosPage() {
    return (
        <>
            <Header></Header>
            <div className="contenedorNyM">
                <NavBar></NavBar>
                <Pagos></Pagos>
            </div>
            <Footer></Footer>
        </>
    )
}
