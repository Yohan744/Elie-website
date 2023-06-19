import PlusIconBlue from "../../public/plus-icon-blue.svg";
import {useEffect} from "react";

function Masthead() {

    let actualPreviewIndex = 0

    useEffect(() => {

        const interval = setInterval(() => {
            if (actualPreviewIndex === 2) {
                actualPreviewIndex = 0
            } else {
                actualPreviewIndex++
            }

            const actualPreview = document.querySelector(`.preview-wrapper .preview[id="${actualPreviewIndex}"]`)
            const previews = document.querySelectorAll(`.preview-wrapper .preview`)

            previews.forEach(preview => {
                preview.classList.remove("show")
            })
            if (actualPreview) {
                actualPreview.classList.add("show")
            }

            const dots = document.querySelector(`.preview-wrapper .dots`)
            if (dots) {
                dots.setAttribute("data-active", actualPreviewIndex)
            }

        }, 3500)


    }, [])

    return (
        <section id={"masthead"}>

            <img src={"masthead-background.png"} alt={"Background image of the experience"} className={"background-image"}/>

            <div className={"global-wrapper"}>

                <div className={"top-wrapper"}>

                    <div className={"info"}>

                        <h1>Exposition ludique sur les interactions entre espèces.</h1>

                        <div className={"button-wrapper"}>

                            <a href={"#reservation"} draggable="false">
                                <div className={"button"}>
                                    <p>Réserver</p>
                                </div>
                            </a>

                            <a href={"#reservation"} draggable="false">
                                <div className={"button"}>
                                    <p>Créer mon groupe</p>
                                    <img src={"plus-icon-blue.svg"} alt="plus icon" className="plus-icon"/>
                                </div>
                            </a>

                        </div>

                    </div>

                    <div className={"video"}>
                        <img src={"video-preview.png"} alt="video preview"/>
                    </div>

                </div>

                <div className={"bottom-wrapper"}>

                    <div className={"news"}>

                        <div className={"left-part"}>

                            <p className={"sub-title"}>Nouveautés</p>

                            <h4 className={"title"}>Notre exposition sera disponible à Annecy de juin à décembre 2023.</h4>

                        </div>

                        <div className={"right-part"}>

                            <p>Nous sommes ravis de vous proposer ce nouveau lieu d’exposition et espérons vous voir nombreux !</p>

                            <a href={"#demo"} className={"know-more"} draggable="false">En savoir plus</a>

                        </div>

                    </div>

                    <div className={"preview-wrapper"}>

                        <div className="preview show" id="0">
                            <img src={"preview-0.png"} alt="Preview of the game"/>
                            <div className="text">
                                <p>L'interface du jeu - Forêt</p>
                            </div>
                        </div>

                        <div className="preview" id="1">
                            <img src={"preview-1.png"} alt="Preview of the game"/>
                            <div className="text">
                                <p>L'interface du jeu - Plaine</p>
                            </div>
                        </div>

                        <div className="preview" id="2">
                            <img src={"masthead-background.png"} alt="Preview of the game"/>
                            <div className="text">
                                <p>L'interface du jeu - Ocean</p>
                            </div>
                        </div>

                        <div className="dots">
                            <div className="dot" id="0"></div>
                            <div className="dot" id="1"></div>
                            <div className="dot" id="2"></div>
                        </div>

                    </div>

                </div>

            </div>

            <a href="#" className="phone">
                <div className="wrapper">

                    <img src={"phone-blue.svg"} alt={"Phone icon"}/>

                    <p>06 44 62 94 41</p>

                </div>
            </a>

        </section>
    )

}

export default Masthead