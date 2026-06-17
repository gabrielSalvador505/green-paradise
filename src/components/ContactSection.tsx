import { useState } from "react"
import { toast } from "react-toastify"
import "../styles/contatct-section.css"
import Button from "./Button"

export default function ContactSection() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function sendContactEmail() {
        if (!email || !message) {
            toast.warn("Por favor, preencha todos os campos. ⚠️");
            return;
        }

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body.error ?? "Erro ao enviar mensagem.");
            }

            toast.success("Mensagem enviada com sucesso! 🚀");
            
            setEmail("");
            setMessage("");

        } catch (error: unknown) {
            console.error(error);
            const message = error instanceof Error ? error.message : "Erro ao enviar e-mail. ❌";
            toast.error(message);
        }
    }

    return (
        <section id="contact">
            <div className="container py-xl justify-center items-center">
                <div className="flex-column py-lg px-lg items-center justify-center contact-card">
                    <h2>Pronto para dar vida ao seu jardim?</h2>
                    <p>Deixe seu e-mail abaixo para agendarmos uma consulta inicial gratuita. Vamos juntos criar o santuário perfeito para você.</p>
                    <div className="form gap-1">
                        <textarea className="text-area" placeholder="Nos envie uma mensagem... ✉️" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <span className="email-wrapper flex gap-2">
                            <input className="px-lg input" type="text" placeholder="Seu melhor e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                            <Button text="Solicitar Consulta" varianty="dark" onClick={sendContactEmail}/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}