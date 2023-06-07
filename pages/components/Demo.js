import {useEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Demo() {

    useEffect(() => {



    }, [])

    return (
        <section id="demo">

            <div className="global-wrapper">

                <div className="left-part">

                    <img src={"plate-360.gif"} alt="Video of the game rotating"/>

                </div>

                <div className="right-part">

                    <h2 className="title">Elie, un outil pédagogique pour découvrir le vivant</h2>

                    <p className="sub-title">Plongez-vous dans des ambiances, éveillez vos sens,  identifier des espèces et découvrez leurs interactions. Faites du jeu un outils immersif pour stimuler la curiosité des enfants sur le monde du vivant !</p>

                    <a href="#">
                        <p className="button">Préparer votre séjour</p>
                    </a>

                </div>

            </div>

            <img src={"demo-vector-left.svg"} alt="Vector icon" className="vector-left"/>

            <img src={"demo-vector-right.svg"} alt="Vector icon" className="vector-right"/>

        </section>
    )

}

export default Demo