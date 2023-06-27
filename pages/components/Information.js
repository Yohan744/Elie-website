function Information() {

    return (
        <section id="information">

            <div className="global-wrapper">

                <h3>Informations <br/>pratiques</h3>

                <div className="info-wrapper">

                    <div className="info">

                        <img src={"animal-deer.svg"} alt={"Animal icon"}/>

                        <h5 className="title">Un lien direct avec le programme scolaire</h5>

                        <p>Des ressources pédagogiques disponibles gratuitement pour un accompagnement complet en amont et en aval de l’expérience.</p>

                    </div>

                    <div className="info">

                        <img src={"animal-fox-pink.svg"} alt={"Animal icon"}/>

                        <h5 className="title">Adapté aux CM1 & CM2</h5>

                        <p>L’expérience a été construite et testée pour correspondre au niveau des élèves.</p>

                    </div>

                    <div className="info">

                        <img src={"animal-wolf-pink.svg"} alt={"Animal icon"}/>

                        <h5 className="title">Durée de 2-3h</h5>

                        <p>Venez vous plonger dans un cadre immersif le temps d’une demi-journée pour découvrir des thèmes variés sur la Nature.</p>

                    </div>

                </div>

            </div>

            <a href="#" draggable="false">

                <div className="contact-us">

                    <p>Nous contacter</p>

                </div>

            </a>

        </section>
    )

}

export default Information