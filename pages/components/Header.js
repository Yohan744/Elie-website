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

                if (observer.deltaY > 15) {
                    if (!header.classList.contains("hide")) {
                        console.log("showwwwwww")
                        header.classList.add("hide");
                    }
                }

                console.log(observer.deltaY)

                if (observer.deltaY < -5) {
                    console.log("hideeeeee")
                    header.classList.remove("hide");
                }

            }
        });

    }, [])

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