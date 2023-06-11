function Ressources(props) {

    return (
        <div className={`download-wrapper ${props.margin ? "" : "no-margin"}`}>

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
    )

}

export default Ressources