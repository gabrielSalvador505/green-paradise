import "../styles/footer-section.css"
import Logo from "../assets/logo-icon.svg"

export default function FooterSection() {
    return (
        <footer id="footer">
            <div className="footer-container container flex py-lg gap-2 items-center">
                <span className="flex logo-wrapper">
                    <img src={Logo}/> 
                    <p className="fs-xl">GreenParadise</p>
                </span>
                <ul className=" footer-nav flex gap-2">
                    <li>Termos de uso</li>
                    <li>Política de privacidade</li>
                    <li>Cookies</li>
                </ul>
                <span className="copyright">&copy; 2026, Gabriel Salvador. Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}