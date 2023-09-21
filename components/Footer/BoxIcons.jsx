import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function BoxIcons() {
    return (
        <>
            <div className="cajaIcons">
                <a href="https://www.instagram.com" target='_blank' className="aIcon animate__pulse">
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", }} />
                </a>
                <a href="https://www.facebook.com" target='_blank' className="aIcon">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} />
                </a>
                <a href="https://www.twitter.com" target='_blank' className="aIcon">
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff", }} />
                </a>
                <a href="https://www.whatsapp.com" className="aIcon" target='_blank'>
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff", }} />
                </a>
            </div>
        </>
    )
}
