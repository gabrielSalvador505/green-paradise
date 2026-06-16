import "../styles/contatct-section.css"
import Button from "./Button"

export default function ContactSection() {
    return (
        <section id="contact">
            <div className="container py-xl justify-center items-center">
                <div className="flex-column py-lg px-lg items-center justify-center contact-card">
                    <h2>Pronto para dar vida ao seu jardim?</h2>
                    <p>Deixe seu e-mail abaixo para agendarmos uma consulta inicial gratuita. Vamos juntos criar o santuário perfeito para você.</p>
                    <div className="form gap-1">
                        <textarea className="text-area" placeholder="Nos envie uma mensagem... ✉️" name="text" id=""></textarea>
                        <span className="email-wrapper flex gap-2">
                            <input className="px-lg input" type="text" placeholder="Seu melhor e-mail"/>
                            <Button text="Solicitar Consulta" varianty="dark"/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}