import "../styles/pricing-section.css"
import Check from "../assets/verified-icon.svg"
import Button from "./Button"

export default function PricingSection() {
    return (
        <section id="pricing">
            <div className="container flex-column py-xl justify-center items-center gap-2">
                    <h2>Nossos Planos e Preços</h2>
                <section className="even-columns py-lg gap-2">
                    <div className="pricing-card py-base px-lg">
                        <div className="plan py-base">
                            <h4>Plano Econômico</h4>
                            <p>Manutenção básica do gramado e checklist de rega.</p>
                        </div>
                        <p><span className="price">R$ 199</span>/mês</p>
                        <span className="feaures">
                            <span className="feature"><img src={Check}/> <p>Corte de grama mensal</p></span>
                            <span className="feature"><img src={Check}/> <p>Checklist de irrigação</p></span>
                            <span className="feature"><img src={Check}/> <p>Limpeza de canteiros</p></span>
                        </span>
                        <span className="button-wrapper">
                            <Button text="Selecionar Plano" varianty="outline"/>
                        </span>
                    </div>
                    <div className="pricing-card py-base px-lg highlight">
                        <div className="tag">
                            <span>Mais popular</span>
                        </div>
                        <div className="plan py-base">
                            <h4>Plano Standard</h4>
                            <p>Manutenção completa, plantio sazonal e controle de pragas.</p>
                        </div>
                        <p><span className="price">R$ 499</span>/mês</p>
                        <span className="feaures">
                            <span className="feature"><img src={Check}/> <p>Todo do econômico</p></span>
                            <span className="feature"><img src={Check}/> <p>Adubação semestral</p></span>
                            <span className="feature"><img src={Check}/> <p>Controle de pragas</p></span>
                            <span className="feature"><img src={Check}/> <p>Poda de arbustos</p></span>
                        </span>
                        <span className="button-wrapper">
                            <Button text="Selecionar Plano" varianty="dark"/>
                        </span>
                    </div>
                    <div className="pricing-card py-base px-lg">
                        <div className="plan py-base">
                            <h4>Plano Premium</h4>
                            <p>Paisagismo de luxo, gestão de irrigação e cuidado prioritário.</p>
                        </div>
                        <p><span className="price">R$ 999</span>/mês</p>
                        <span className="feaures">
                            <span className="feature"><img src={Check}/> <p>Tudo do Standard</p></span>
                            <span className="feature"><img src={Check}/> <p>Gestão de irrigação 24/7</p></span>
                            <span className="feature"><img src={Check}/> <p>Atendimento prioritário</p></span>
                            <span className="feature"><img src={Check}/> <p>Paisagismo completo</p></span>

                        </span>
                        <span className="button-wrapper">
                            <Button text="Selecionar Plano" varianty="outline"/>
                        </span>
                    </div>
                </section>
            </div>
        </section>
    )
}