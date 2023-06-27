function Advice() {

    return (
        <section id="advice">

            <div className="global-wrapper">

                <div className="info">

                    <h3 className="title">Les avis de nos participants</h3>

                    <p className="paragraph">Merci pour tous vos retours qui nous aident à améliorer l’expérience ELIE.</p>

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

                            <p className="quote">“J’ai ressentis un réel intérêt de la part des élèves  lors du retour en classe.”</p>

                            <div className="type prof">
                                <p>Professeur(e)</p>
                            </div>

                        </div>

                    </div>

                    <div className="advice-right">

                        <div className="advice">

                            <img src={"animal-fox.png"} alt="Fox icon" />

                            <h5 className="name">Éric</h5>

                            <p className="quote">“Très utile, j’ai gagné du temps lors de mes explications.”</p>

                            <div className="type prof">
                                <p>Professeur(e)</p>
                            </div>

                        </div>

                        <div className="advice">

                            <img src={"animal-fox.png"} alt="Fox icon" />

                            <h5 className="name">Clara</h5>

                            <p className="quote">“Avec Elliot on a découvert la rémora, c’était trop bien de voir le requin aussi.”</p>

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