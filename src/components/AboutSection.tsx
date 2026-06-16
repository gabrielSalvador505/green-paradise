import "../styles/about-section.css"
import "../styles/utility.css"
import Button from "./Button"

export default function AboutSection() {
    return (
        <section id="about">
            <div className="flex-column py-xl container">
                <div className="flex px-lg experience-container">
                    <div className="line line-1">
                        <div className="odd experience-card">
                            <h3>15+</h3>
                            <p>Anos de Experiência</p>
                        </div>
                        <div className="even experience-card">
                            <h3>500+</h3>
                            <p>Projetos Concluídos</p>
                        </div>
                    </div>
                    <div className="line line-2">
                        <div className="even experience-card">
                            <h3>100%</h3>
                            <p>Sustentável</p>
                        </div>
                        <div className="odd experience-card">
                            <h3>25+</h3>
                            <p>Equipe Especializada</p>
                        </div>
                    </div>
                </div>
                <div className="about-container px-lg">
                    <h2 className="py-base">Cultivando Lindos Espaços por Mais de uma Década</h2>
                    <p>Nossa paixão reside na intersecção entre o luxo e a sustentabilidade. Ao longo dos anos, aperfeiçoamos nossa técnica  ara transformar quintais comuns em santuários particulares que respeitam o ecossistema local e refletem a personalidade unica de cada cliente.</p>
                    <Button text="Saiba mais" varianty="dark" showIcon/>
                </div>
            </div>
        </section>
    )
}