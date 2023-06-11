import Ressources from "./Ressources";

function Preparation() {

    return (
        <section id="preparation">

            <div className="global-wrapper">

                <h3 className="title">Préparer sa venue</h3>

                <img src={"line-to-dot.svg"} alt={"Line icon"} className="lineToDot"/>

                <h5 className={"sub-title"}>Télécharger nos <span>ressources pédagogiques</span></h5>

                <Ressources margin={true}/>

                <img src={"line-to-dot.svg"} alt={"Line icon"} className="lineToDot"/>

                <h5 className={"sub-title"}><span>Confirmez votre venue</span> auprès du corps enseignants</h5>

                <img src={"line-to-dot.svg"} alt={"Line icon"} className="lineToDot margin-top"/>

                <h5 className={"sub-title"}>En classe, préparer des <span>groupes de 3 élèves avec un nom d'équipe.</span></h5>

                <img src={"line-to-arrow.svg"} alt={"Line icon"} className="lineToArrow"/>

            </div>

        </section>
    )

}

export default Preparation