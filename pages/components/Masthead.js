import PlusIconBlue from "../../asset/svg/plus-icon-blue.svg";

function Masthead() {

    return (
        <section id={"masthead"}>

            <img src={"masthead-background.png"} alt={"Background image of the experience"} className={"background-image"}/>

            <div className={"global-wrapper"}>

                <div className={"top-wrapper"}>

                    <div className={"info"}>

                        <h1>Exposition ludique sur les interactions entre espèces.</h1>

                        <div className={"button-wrapper"}>

                            <a href={"#reservation"} draggable="false">
                                <div className={"button"}>
                                    <p>Réserver</p>
                                </div>
                            </a>

                            <a href={"#reservation"} draggable="false">
                                <div className={"button"}>
                                    <p>Créer mon groupe</p>
                                    <PlusIconBlue className="plus-icon"/>
                                </div>
                            </a>

                        </div>

                    </div>

                    <div className={"video"}></div>

                </div>

                <div className={"bottom-wrapper"}>

                    <div className={"news"}>

                        <div className={"left-part"}>

                            <p className={"sub-title"}>Nouveautés</p>

                            <h4 className={"title"}>Notre exposition sera disponible à Annecy de juin à décembre 2023.</h4>

                        </div>

                        <div className={"right-part"}>

                            <p>Nous sommes ravis de vous proposer ce nouveau lieu d’exposition et espérons vous voir nombreux !</p>

                            <a href={"#demo"} className={"know-more"} draggable="false">En savoir plus</a>

                        </div>

                    </div>

                    <div className={"preview"}>

                    </div>

                </div>

            </div>

            <a href="#" className="phone">
                <div className="wrapper">

                    <img src={"phone-blue.svg"} alt={"Phone icon"}/>

                    <p>07 56 80 96 88</p>

                </div>
            </a>

        </section>
    )

}

export default Masthead