import { BoxIcons } from "./BoxIcons"
import { BoxUl } from "./BoxUl"


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <BoxUl></BoxUl>
                    <BoxIcons></BoxIcons>
                </div>
            </footer>
        </>
    )
}
