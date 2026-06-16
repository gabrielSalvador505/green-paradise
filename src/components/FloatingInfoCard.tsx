import "../styles/FloatingInfoCard.css"
import "../styles/index.css"
import "../styles/utility.css"
import Design from "../assets/design-icon.svg"
import Tools from "../assets/tools-icon.svg"
import Calendar from "../assets/calendar-icon.svg"

export default function FloatingInfoCard() {
    return (
        <section className="container">
            <div className="floating-card">
                <div>
                    <div>
                        <img src={Design} alt="ícone design"/>
                    </div>
                    <p>Design Personalizado</p>
                </div>
                <div>
                    <div>
                        <img src={Tools} alt="ícone design"/>
                    </div>
                    <p>Instalação Profissional</p>
                </div>
                <div>
                    <div>
                        <img src={Calendar} alt="ícone design"/>
                    </div>
                    <p>Manutenção Pogramada</p>
                </div>
            </div>
        </section>
    )
}