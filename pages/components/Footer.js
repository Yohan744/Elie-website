import VectorLeft from "../../asset/svg/footer-vector-left-blue.svg";
import VectorRight from "../../asset/svg/footer-vector-right-blue.svg";
import {useEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {

        gsap.to("footer .vector-left", {
            scrollTrigger: {
                trigger: "footer",
                start: "center bottom",
                end: "bottom bottom"
            },
            duration: 1.5,
            delay: 0.75,
            strokeDashoffset: "840px",
            ease: "power4.out"
        })

        gsap.to("footer .vector-right", {
            scrollTrigger: {
                trigger: "footer",
                start: "center bottom",
                end: "bottom bottom"
            },
            duration: 1.5,
            strokeDashoffset: "0px",
            ease: "power4.out"
        })

    }, [])

    return (
        <footer>

            <div className="global-wrapper">

                <img src={"logo-baseline-white.svg"} alt="Logo white" className="logo-white"/>

                <div className="link-wrapper">

                    <a className="link" href="#demo">L’exposition</a>

                    <a className="link" href="#reservation">Réservation</a>

                    <a className="link" href="#">Fiches pédagogiques</a>

                    <a className="link" href="#advice">Avis</a>

                </div>

                <div className="sub-link-wrapper">

                    <a className="sub-link" href="#">Politique de confidentialité</a>

                    <a className="sub-link margin"> - </a>

                    <a className="sub-link" href="#">Mentions légales</a>

                </div>

                <VectorLeft className="vector-left"/>

                <VectorRight className="vector-right"/>

            </div>

        </footer>
    )

}

export default Footer