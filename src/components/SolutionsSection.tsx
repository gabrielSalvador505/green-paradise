import "../styles/solutions-section.css"
import Irrigation from "../assets/irrigation.png"
import IrrigationIcon from "../assets/irrigation-icon.svg"
import Landscaping from "../assets/landscaping.png"
import LandscapingIcon from "../assets/landscaping-icon.svg"
import Pruning from "../assets/pruning.png"
import PruningIcon from "../assets/pruning-icon.svg"
import Button from "./Button"

export default function SolutionsSection() {
    return (
        <section id="solution">
            <div className="flex-column py-xl px-lg justify-center items-center gap-2 container">
                <h2>Nossas Soluções de Jardinagem</h2>
                <div className="flex gap-2 solutions-container">
                    <div className="solution-card">
                        <div className="container-image">
                            <img src={Irrigation} alt="" />
                        </div>
                        <div className="px-lg py-base mid-card">
                            <img src={IrrigationIcon} alt="" />
                            <h3>Sistemas de Irrigação Automatizada</h3>
                        </div>
                        <p className="px-lg py-lg">Soluções inteligentes de gestão de água para manter seu jardim exuberante com máxima eficiência e economia, adaptando-se às necessidades específicas de cada planta.</p>
                        <span className="py-base px-lg">
                        <Button text="Saiba mais" varianty="transparent" showIcon/>
                        </span>
                    </div>
                    <div className="solution-card">
                        <div className="container-image">
                            <img src={Landscaping} alt="" />
                        </div>
                        <div className="px-lg py-base mid-card">
                            <img src={LandscapingIcon} alt="" />
                            <h3 className="px-lg">Plantio e Paisagismo</h3>
                        </div>
                        <p className="px-lg py-lg">Design estético e sustentável, selecionando as espécies ideais para o seu clima e solo, criando um ambiente harmonioso e cheio de vida que valoriza sua propriedade.</p>
                        <span className="py-base px-lg">
                        <Button text="Saiba mais" varianty="transparent" showIcon/>
                        </span>
                    </div>
                    <div className="solution-card">
                        <div className="container-image">
                            <img src={Pruning} alt="" />
                        </div>
                        <div className="px-lg py-base mid-card">
                            <img src={PruningIcon} alt="" />
                            <h3>Poda e Tratamento de Árvores</h3>
                        </div>
                        <p className="px-lg py-lg">Cuidados especializados para a saúde e beleza das suas árvores, garantindo crescimento forte, segurança estrutural e prevenção de doenças por profissionais qualificados.</p>
                        <span className="py-base px-lg">
                        <Button text="Saiba mais" varianty="transparent" showIcon/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}