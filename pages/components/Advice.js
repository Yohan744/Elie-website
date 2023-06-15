function Advice() {

    return (
        <section id="advice">

            <div className="global-wrapper">

                <div className="info">

                    <h3 className="title">Les avis de nos participants</h3>

                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <a href="#" className="give-advice" draggable="false">
                        <p>Donner un avis</p>
                    </a>

                </div>

                <div className="advice-wrapper">

                    <div className="advice-left">

                        <div className="advice">

                            <img src={"animal-fox.png"} alt="Fox icon" />

                            <h5 className="name">Tristan</h5>

                            <p className="quote">“J’ai adoré jouer avec mes amis, j’ai trouvé le bruit de la biche super drôle en plus!”</p>

                            <div className="type">
                                <p>Élève</p>
                            </div>

                        </div>

                        <div className="advice">

                            <img src={"animal-fox.png"} alt="Fox icon" />

                            <h5 className="name">Sarah</h5>

                            <p className="quote">“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>

                            <div className="type prof">
                                <p>Professeur(e)</p>
                            </div>

                        </div>

                    </div>

                    <div className="advice-right">

                        <div className="advice">

                            <img src={"animal-fox.png"} alt="Fox icon" />

                            <h5 className="name">Sarah</h5>

                            <p className="quote">“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>

                            <div className="type prof">
                                <p>Professeur(e)</p>
                            </div>

                        </div>

                        <div className="advice">

                            <img src={"animal-fox.png"} alt="Fox icon" />

                            <h5 className="name">Tristan</h5>

                            <p className="quote">“J’ai adoré jouer avec mes amis, j’ai trouvé le bruit de la biche super drôle en plus!”</p>

                            <div className="type">
                                <p>Élève</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )

}

export default Advice