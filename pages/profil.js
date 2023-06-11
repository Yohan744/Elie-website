import Ressources from "./components/Ressources";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function profil() {

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function handleTypeClick(e) {
        const allTypes = document.querySelectorAll('.type-wrapper .type');
        if (e.target.classList.contains('is-active')) {
            e.target.classList.remove('is-active');
            setType("")
        } else {
            allTypes.forEach(type => {
                type.classList.remove('is-active');
            })
            e.target.classList.add('is-active');
            setType(e.target.innerHTML)
        }
        verifyAdvice()
    }

    function verifyAdvice() {
        console.log(type, name, advice)
        const validateButton = document.querySelector('.give-advice .validate-button');
        if (type !== "" && name !== "" && advice !== "") {
            validateButton.classList.add('is-active');
        } else {
            validateButton.classList.remove('is-active');
        }

    }

    return (
        <main id="profil">

            <div className="left-part">

                <h3 className="title">Sarah Dubreuil</h3>

                <div className="modify wrapper">

                    <h5 className='sub-title'>Modifier votre profil</h5>

                    <h6>Prénom</h6>
                    <div className="wrapper">
                        <input type="text" placeholder="Renseigner le prénom" maxLength="30"/>
                        <img src={"pen.svg"} alt="Pen icon"/>
                    </div>

                    <h6>Nom</h6>
                    <div className="wrapper">
                        <input type="text" placeholder="Renseigner le nom" maxLength="30"/>
                        <img src={"pen.svg"} alt="Pen icon"/>
                    </div>

                    <h6>Mail</h6>
                    <div className="wrapper">
                        <input type="email" placeholder="Renseigner l'email" maxLength="30"/>
                        <img src={"pen.svg"} alt="Pen icon"/>
                    </div>

                    <h6>Mot de passe</h6>
                    <div className="wrapper">
                        <input type="password" placeholder="Renseigner le nom" maxLength="30"/>
                        <img src={"pen.svg"} alt="Pen icon"/>
                    </div>

                    <div className="validate-button">Valider</div>

                </div>

                <div className="dot-line"></div>

                <div className="give-advice wrapper">

                    <h5 className='sub-title'>Donner un avis</h5>

                    <h6>Profil</h6>

                    <div className="type-wrapper">
                        <div className="type" onClick={(e) => handleTypeClick(e)}>Professeur</div>
                        <div className="type" onClick={(e) => handleTypeClick(e)}>Élève*</div>
                    </div>

                    <p className="info">*Vous pouvez fournir l’avis d’un élève, il sera renseigné sous votre adresse
                        mail. </p>

                    <h6>Prénom</h6>
                    <div className="wrapper">
                        <input type="text" placeholder="Renseigner le prénom" maxLength="30" className="name"
                               onInput={(e) => {
                                   verifyAdvice();
                                   setName(e.target.value)
                               }}/>
                        <img src={"pen.svg"} alt="Pen icon"/>
                    </div>

                    <h6>Avis</h6>
                    <div className="wrapper textarea">
                        <textarea placeholder="Renseigner l'avis (150 caractères max)..." maxLength="150"
                                  className="name" onInput={(e) => {
                            verifyAdvice();
                            setAdvice(e.target.value)
                        }}/>
                        <img src={"pen.svg"} alt="Pen icon"/>
                    </div>

                    <div className="validate-button">Valider</div>

                </div>

            </div>

            <div className="right-part">

                <div className="reservation wrapper">

                    <h5 className='sub-title'>Votre réservations en cours</h5>

                    <div className="reservation-wrapper">

                        <h5>Créneau</h5>
                        <h6>Mardi 07/06 à 9h00.</h6>

                        <h5>Lieu</h5>
                        <h6>Annecy - La Turbine.</h6>

                        <h5>Groupe</h5>
                        <h6>1 classe, 20 élèves, CM1.</h6>

                    </div>

                    <div className="info-wrapper">

                        <Link href="/profil" className="download" draggable="false">
                            <p>Télecharger mon billet</p>
                            <img src={"download-white.svg"} alt="Download icon"/>
                        </Link>

                        <Link href="/#reservation" className="modify" draggable="false">
                            <p>Modifier</p>
                            <img src={"arrow-right-grey.svg"} alt="Download icon"/>
                        </Link>

                    </div>

                </div>

                <div className="resssources wrapper">

                    <h5 className='sub-title margin'>Ressources</h5>

                    <Ressources margin={false}/>

                </div>

                <div className="questions wrapper">

                    <h5 className='sub-title margin'>Des questions ?</h5>

                    <h6 className="text-medium">Téléphone</h6>
                    <p className="text">06 44 62 94 41</p>

                    <h6 className="text-medium">Mail</h6>
                    <p className="text">Contact@elie.fr</p>

                </div>

            </div>

        </main>
    )
}