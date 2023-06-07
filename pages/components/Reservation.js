function Reservation() {

    return (
        <section id="reservation">

            <div className="global-wrapper">

                <h3 className="title">Venir à l'exposition Elie en <span>4 étapes</span></h3>

                <div className="state-wrapper">

                    <div className="state is-active" id="0">
                        <div className="state-number">1</div>
                        <p>Réserver votre créneau</p>
                    </div>

                    <div className="line"></div>

                    <div className="state" id="1">
                        <div className="state-number">2</div>
                        <p>Renseigner votre profil de groupe</p>
                    </div>

                    <div className="line"></div>

                    <div className="state" id="2">
                        <div className="state-number">3</div>
                        <p>Créer les groupes d'élèves</p>
                    </div>

                    <div className="line"></div>

                    <div className="state" id="3">
                        <div className="state-number">4</div>
                        <p>Récapitulatif de votre réservation</p>
                    </div>

                </div>

                <div className="container">

                </div>

            </div>


        </section>
    )

}

export default Reservation