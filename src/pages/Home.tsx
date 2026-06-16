import Logo from "../assets/logo-icon.svg"
import Close from "../assets/close-icon.svg"
import Menu from "../assets/hamburger-icon.svg"
import "../styles/header.css"
import "../styles/utility.css"
import Button from "../components/Button.tsx"
import { useState } from "react"
import AboutSection from "../components/AboutSection.tsx"
import SolutionsSection from "../components/SolutionsSection.tsx"
import ClientReviewSection from "../components/ClientReviewSection.tsx"
import PricingSection from "../components/PricingSection.tsx"
import ContactSection from "../components/ContactSection.tsx"
import FooterSection from "../components/FooterSection.tsx"

export default function Home() {

    const[showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <>
        <header className="container py-base">
            <nav className="flex items-center justify-between">
                <span className="logo-wrapper">
                    <img src={Logo} alt="Logo GreenParadise" width={40} height={35}/>
                    <p className="fs-xl">GreenParadise</p>
                </span>
            <div className="desktop-only">
                <ul className="flex gap-2">
                    <li>
                        <a href="#hero">Home</a>
                    </li>
                    <li>
                        <a href="#solution">Soluções</a>
                    </li>
                    <li>
                        <a href="#client-review">Depoimentos</a>
                    </li>
                    <li>
                        <a href="#pricing">Preços</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
            <div className="desktop-only">
                <div className="flex items-center">
                    <Button text="Começar" varianty="dark"/>
                </div>
            </div>

            <div className="mobile-menu">
                {showMobileMenu ?
                    <div className="mobile-menu-content">
                        <div className="container flex">
                            <ul>
                                <li>
                                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                                </li>
                                <li>
                                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                                </li>
                                <li>
                                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                                </li>
                                <li>
                                    <a onClick={() => setShowMobileMenu(!showMobileMenu)}href="#pricing" >Preços</a>
                                </li>
                                <li>
                                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                                </li>
                            </ul>
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                            </span>
                        </div>
                    </div>
                    :
                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                        <img src={Menu} alt="ícone menu" width={24} height={24} />
                    </span>
                }
            </div>

            </nav>
        </header>
        <section id="home">
            <div className="hero-filter">
                <div className="container content flex-column">
                    <h1 className="px-lg">TRANSFORME SEU ESPAÇO EXTERNO EM UM PARAÍSO</h1>
                    <p className="px-xl">Criamos jardins de luxo, ecologicamente conscientes, que harmonizam com a natureza e elevam o seu estilo de vida.</p>
                    <div className="flex">
                        <Button text="Solicitar Orçamento" showIcon/>
                    </div>
                </div>
            </div>
        </section>
        <AboutSection/>
        <SolutionsSection/>
        <ClientReviewSection/>
        <PricingSection/>
        <ContactSection/>
        <FooterSection/>
        </>
    )
}