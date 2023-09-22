"use client"

import Image from "next/image"
import ContactForm from "../ContactForm/ContactForm"
import CardCompoenent from "./CardComponent"
import ListInicio from "./ListInicio"

export default function () {
    return (
        <>
            <main className="main mainInicio">

                <h2 className="title">Bienvenido a Innovacion Financiera Online Banking</h2>

                <Image src={"/assets/2.png"} width={1200} height={500}></Image>

                <CardCompoenent></CardCompoenent>

                <ListInicio></ListInicio>

                <ContactForm></ContactForm>
            </main>
        </>
    )
}
