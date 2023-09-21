
export default function ContactForm() {
    return (
        <div className="containerContactGrid">
            <h2 className="contactTitle">Contactanos</h2>
            <form className="contactGrid">

                <div className="nombre">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input className="form-control" type="text" id="name" />
                </div>

                <div className="apellido">
                    <label className="form-label" htmlFor="name">Apellido</label>
                    <input className="form-control" type="text" id="name" />
                </div>

                <div className="textarea">
                    <label className="form-label label" htmlFor="message">Mensaje</label>
                    <textarea name="" id="message" className="textareaContact" cols="20" rows="10" placeholder="Escribe su mensaje aqui"></textarea>
                </div>

                <button className="button">Enviar</button>
            </form>
        </div>
    )
}
