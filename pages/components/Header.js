import {useEffect, useState} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {Observer} from "gsap/dist/Observer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {

        const header = document.querySelector("header");

        Observer.create({
            target: window,
            type: "wheel",
            onChange(observer) {

                if (observer.deltaY > 25) {
                    if (!header.classList.contains("hide")) {
                        header.classList.add("hide");
                    }
                }

                if (observer.deltaY < -20) {
                    if (header.classList.contains("hide")) {
                        header.classList.remove("hide");
                    }
                }

            }
        });

    }, [])

    function handleClickOnHeader() {
        const header = document.querySelector("header");
        header.classList.add("hide");
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
    }

    function handleClickOnMobileMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (isMenuOpen) {
            openMobileMenu()
        } else {
            closeMobileMenu()
        }
    }, [isMenuOpen])

    function openMobileMenu() {
        const menuButton = document.querySelector(".mobile-menu-wrapper");
        const menu = document.querySelector(".menu");
        const menuBackground = document.querySelector(".menu-background");

        menuButton.classList.add("is-active");
        menu.classList.add("is-active");
        menuBackground.classList.add("is-active");

        gsap.to(".menu div p", {
            y: 0,
            skewY: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            delay: 0.2,
            ease: "Power4.Out",
        })

    }

    function closeMobileMenu() {
        const menuButton = document.querySelector(".mobile-menu-wrapper");
        const menu = document.querySelector(".menu");
        const menuBackground = document.querySelector(".menu-background");

        gsap.to(".menu div p", {
            y: 100,
            skewY: 10,
            opacity: 0,
            duration: 0.35,
            stagger: 0.15,
            ease: "Power4.Out",
        })

        setTimeout(() => {
            menuButton.classList.remove("is-active");
            menu.classList.remove("is-active");
            menuBackground.classList.remove("is-active");
        }, 400)

    }

    return (
        <>
            <header>

                <Link href="/">
                    <img src={"logo-green.svg"} alt={"Green logo of Elie"} className={"logo"}/>
                </Link>

                <div className={"right-part"}>

                    <a href={"#demo"} className="link" draggable="false"
                       onClick={() => handleClickOnHeader()}>L’exposition</a>
                    <a href={"#information"} className="link" draggable="false" onClick={() => handleClickOnHeader()}>Informations
                        pratiques</a>
                    <a href={"#preparation"} className="link" draggable="false" onClick={() => handleClickOnHeader()}>Ressources
                        pédagogiques</a>
                    <a href={"#advice"} className="link" draggable="false"
                       onClick={() => handleClickOnHeader()}>Avis</a>

                    <Link href={"/profil"}>
                        <div className={"user"}>
                            <img src={"user.svg"} alt={"User icon"}/>
                        </div>
                    </Link>

                    <a href={"#reservation"}>
                        <div className={"reserve"} draggable="false" onClick={() => handleClickOnHeader()}>
                            <p>Réserver</p>
                        </div>
                    </a>

                    <div className="mobile-menu-wrapper" onClick={() => handleClickOnMobileMenu()}>
                        <span></span>
                    </div>

                </div>

            </header>

            <div className="menu">

                <div>
                    <p>
                        <a href={"#demo"} className="link" draggable="false"
                           onClick={() => handleClickOnHeader()}>L’exposition</a>
                    </p>
                </div>

                <div>
                    <p>
                        <a href={"#information"} className="link" draggable="false"
                           onClick={() => handleClickOnHeader()}>Informations pratiques</a>
                    </p>
                </div>

                <div>
                    <p>
                        <a href={"#preparation"} className="link" draggable="false"
                           onClick={() => handleClickOnHeader()}>Ressources pédagogiques</a>
                    </p>
                </div>

                <div>
                    <p>
                        <a href={"#advice"} className="link" draggable="false"
                           onClick={() => handleClickOnHeader()}>Avis</a>
                    </p>
                </div>

            </div>

            <div className="menu-background" onClick={() => handleClickOnMobileMenu()}></div>

        </>
    )

}

export default Header