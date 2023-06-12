import VectorLeft from "../../asset/svg/footer-vector-left-blue.svg";
import VectorRight from "../../asset/svg/footer-vector-right-blue.svg";
import {useEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "footer",
                start: "top 80%",
                end: "bottom bottom",
            }
        })

        tl.to("footer .vector-right", {duration: 1.2, strokeDashoffset: "0px", ease: "power4.out"})
            .to("footer .vector-left", {duration: 1.2, strokeDashoffset: "860px", delay: -0.45, ease: "power4.out"})

        ScrollTrigger.create({
            trigger:'footer',
            onLeaveBack: () => tl.pause(0)
        });

    }, [])

    return (
        <footer>

            <div className="global-wrapper">

                <img src={"logo-baseline-white.svg"} alt="Logo white" className="logo-white"/>

                <div className="link-wrapper">

                    <a className="link" href={"#demo"} draggable="false">L’exposition</a>

                    <a className="link" href={"#reservation"} draggable="false">Réservation</a>

                    <a className="link" href={"#preparation"} draggable="false">Fiches pédagogiques</a>

                    <a className="link" href={"#advice"} draggable="false">Avis</a>

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