import {useEffect} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {Observer} from "gsap/dist/Observer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

function Header() {

    useEffect(() => {

        const header = document.querySelector("header");

        Observer.create({
            target: window,
            type: "wheel",
            onChange(observer) {

                if (observer.deltaY > 40) {
                    if (!header.classList.contains("hide")) {
                        header.classList.add("hide");
                    }
                }

                if (observer.deltaY < -20) {
                    header.classList.remove("hide");
                }

            }
        });

    }, [])

    function handleClickOnHeader() {
        const header = document.querySelector("header");
        header.classList.add("hide");
    }

    return (
        <header>

            <img src={"logo-green.svg"} alt={"Green logo of Elie"} className={"logo"}/>

            <div className={"right-part"}>

                <a href={"#demo"} className="link" draggable="false" onClick={() => handleClickOnHeader()}>L’exposition</a>
                <a href={"#information"} className="link" draggable="false" onClick={() => handleClickOnHeader()}>Informations pratiques</a>
                <a href={"#preparation"} className="link" draggable="false" onClick={() => handleClickOnHeader()}>Ressources pédagogiques</a>
                <a href={"#advice"} className="link" draggable="false" onClick={() => handleClickOnHeader()}>Avis</a>

                <div className={"user"}>
                    <img src={"user.svg"} alt={"User icon"}/>
                </div>

                <a href={"#reservation"}>
                    <div className={"reserve"} draggable="false" onClick={() => handleClickOnHeader()}>
                        <p>Réserver</p>
                    </div>
                </a>

            </div>

        </header>
    )

}

export default Header