import "../styles/client-review-section.css";
import Star from "../assets/star-icon.svg";
import BlankStar from "../assets/blank-star-icon.svg";
import Client_1 from "../assets/client-1.png";
import Client_2 from "../assets/client-2.png"
import Client_3 from "../assets/client-3.png"
import Verified from "../assets/verified-icon.svg";

export default function ClientReviewSection() {
  return (
    <section id="client-review">
      <div className="container flex-column gap-2 items-center py-xl">
        <h2>O Que Nossos Clientes Dizem</h2>
        <div className="carousel">
          <div className="carousel-content flex gap-2 py-lg">
            <div className="review-card flex">
              <div className="flex-column">
                <span className="flex py-base px-lg">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={BlankStar} alt="" />
                </span>
                <p className="py-base px-lg">
                  "O projeto superou todas as minhas expectativas. A atenção aos
                  detalhes e a rapidez na execução foram impressionantes."
                </p>
                <div className="client-profile flex py-base px-lg gap-1">
                  <div className="client-wraper">
                    <img src={Client_1} alt="" />
                  </div>
                  <div className="client-info flex-column">
                    <h4>Ana Silva</h4>
                    <span className="flex gap-0\.5 verified">
                      <img src={Verified} alt="" />
                      <p>Verificado</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card flex">
              <div className="flex-column">
                <span className="flex py-base px-lg">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={BlankStar} alt="" />
                </span>
                <p className="py-base px-lg">"Profissionais extremamente qualificados. Transformaram meu jardim em um verdadeiro refúgio de paz em tempo recorde."</p>
                <div className="client-profile flex py-base px-lg gap-1">
                  <div className="client-wraper">
                    <img src={Client_2} alt="" />
                  </div>
                  <div className="client-info flex-column">
                    <h4>Beatriz Silva</h4>
                    <span className="flex gap-0\.5 verified">
                      <img src={Verified} alt="" />
                      <p>Verificado</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card flex">
              <div className="flex-column">
                <span className="flex py-base px-lg">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={BlankStar} alt="" />
                </span>
                <p className="py-base px-lg">"O sistema de irrigação automatizada facilitou minha vida. Serviço de altíssima qualidade e suporte impecável."</p>
                <div className="client-profile flex py-base px-lg gap-1">
                  <div className="client-wraper">
                    <img src={Client_3} alt="" />
                  </div>
                  <div className="client-info flex-column">
                    <h4>Carlos e Julia</h4>
                    <span className="flex gap-0\.5 verified">
                      <img src={Verified} alt="" />
                      <p>Verificado</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card flex">
              <div className="flex-column">
                <span className="flex py-base px-lg">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={BlankStar} alt="" />
                </span>
                <p className="py-base px-lg">
                  "O projeto superou todas as minhas expectativas. A atenção aos
                  detalhes e a rapidez na execução foram impressionantes."
                </p>
                <div className="client-profile flex py-base px-lg gap-1">
                  <div className="client-wraper">
                    <img src={Client_1} alt="" />
                  </div>
                  <div className="client-info flex-column">
                    <h4>Ana Silva</h4>
                    <span className="flex gap-0\.5 verified">
                      <img src={Verified} alt="" />
                      <p>Verificado</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card flex">
              <div className="flex-column">
                <span className="flex py-base px-lg">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={BlankStar} alt="" />
                </span>
                <p className="py-base px-lg">"Profissionais extremamente qualificados. Transformaram meu jardim em um verdadeiro refúgio de paz em tempo recorde."</p>
                <div className="client-profile flex py-base px-lg gap-1">
                  <div className="client-wraper">
                    <img src={Client_2} alt="" />
                  </div>
                  <div className="client-info flex-column">
                    <h4>Beatriz Silva</h4>
                    <span className="flex gap-0\.5 verified">
                      <img src={Verified} alt="" />
                      <p>Verificado</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card flex">
              <div className="flex-column">
                <span className="flex py-base px-lg">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={BlankStar} alt="" />
                </span>
                <p className="py-base px-lg">"O sistema de irrigação automatizada facilitou minha vida. Serviço de altíssima qualidade e suporte impecável."</p>
                <div className="client-profile flex py-base px-lg gap-1">
                  <div className="client-wraper">
                    <img src={Client_3} alt="" />
                  </div>
                  <div className="client-info flex-column">
                    <h4>Carlos e Julia</h4>
                    <span className="flex gap-0\.5 verified">
                      <img src={Verified} alt="" />
                      <p>Verificado</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
