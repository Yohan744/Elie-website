function Header() {

    return (
        <header>

            <img src={"logo-green.svg"} alt={"Green logo of Elie"} className={"logo"}/>

            <div className={"right-part"}>

                <a href={"#demo"}>L’exposition</a>
                <a href={"#information"}>Informations pratiques</a>
                <a href={"#"}>Ressources pédagogiques</a>
                <a href={"#advice"}>Avis</a>

                <div className={"user"}>
                    <img src={"user.svg"} alt={"User icon"}/>
                </div>

                <div className={"reserve"}>
                    <p>Réserver</p>
                </div>

            </div>

        </header>
    )

}

export default Header