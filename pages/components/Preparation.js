function Preparation() {

    return (
        <section id="preparation">

            <div className="global-wrapper">

                <h3 className="title">Préparer sa venue</h3>

                <img src={"line-to-dot.svg"} alt={"Line icon"} className="lineToDot"/>

                <h5 className={"sub-title"}>Télécharger nos <span>ressources pédagogiques</span></h5>

                <div className="download-wrapper">

                    <a href={"masthead-background.png"} download="plan_2023.pdf" rel="noopener noreferrer" target="_blank" draggable="false">
                        <div className="download">

                            <div className="info">

                                <h6>Plan du lieu</h6>

                                <p>plan_2023.pdf</p>

                            </div>

                            <img src={"download-icon.svg"} alt="Download icon" className="icon"/>

                        </div>
                    </a>

                    <a href={"masthead-background.png"} download="fiche_officielle_2023.pdf" rel="noopener noreferrer" target="_blank" draggable="false">
                        <div className="download">

                            <div className="info">

                                <h6>Fiche pédagogique</h6>

                                <p>fiche_officielle_2023.pdf</p>

                            </div>

                            <img src={"download-icon.svg"} alt="Download icon" className="icon"/>

                        </div>
                    </a>

                    <a href={"masthead-background.png"} download="reglement_elie_2023.pdf" rel="noopener noreferrer" target="_blank" draggable="false">
                        <div className="download">

                            <div className="info">

                                <h6>Règlement intérieur</h6>

                                <p>reglement_elie_2023.pdf</p>

                            </div>

                            <img src={"download-icon.svg"} alt="Download icon" className="icon"/>

                        </div>
                    </a>

                </div>

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