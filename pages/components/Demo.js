import VectorLeft from "../../asset/svg/demo-vector-left-pink.svg";
import VectorRight from "../../asset/svg/demo-vector-right-pink.svg";
import {useEffect} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Demo() {

    useEffect(() => {

        gsap.to("#demo .vector-left", {
            scrollTrigger: {
                trigger: "#demo",
                start: "center bottom",
                end: "top top",
                scrub: true
            },
            strokeDashoffset: "1640px",
            ease: "linear"
        })

        gsap.to("#demo .vector-right", {
            scrollTrigger: {
                trigger: "#demo",
                start: "top-=300px center+=50px",
                end: "center bottom",
                scrub: true
            },
            strokeDashoffset: "0px",
            ease: "linear"
        })

    }, [])

    return (
        <section id="demo">

            <div className="global-wrapper">

                <div className="left-part">

                    <img src={"plate-360.gif"} alt="Video of the game rotating"/>

                </div>

                <div className="right-part">

                    <h2 className="title">Elie, un outil pédagogique pour découvrir le vivant</h2>

                    <p className="sub-title">Plongez-vous dans des ambiances, éveillez vos sens, identifier des espèces
                        et découvrez leurs interactions. Faites du jeu un outils immersif pour stimuler la curiosité des
                        enfants sur le monde du vivant !</p>

                    <a href="#">
                        <p className="button">Préparer votre séjour</p>
                    </a>

                </div>

            </div>

            <VectorLeft className="vector-left"/>

            <VectorRight className="vector-right"/>

        </section>
    )

}

export default Demo