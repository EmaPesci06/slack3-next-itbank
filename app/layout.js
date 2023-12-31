import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./global.css"
config.autoAddCss = false

export const metadata = {
  title: 'Banco Innovacion Financiera',
  description: 'Banco Innovacion Financiera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="ico" href="/assets/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
