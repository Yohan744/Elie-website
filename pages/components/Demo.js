import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import VectorLeft from '../../asset/svg/demo-vector-left-pink.svg';
import VectorRight from '../../asset/svg/demo-vector-right-pink.svg';

gsap.registerPlugin(ScrollTrigger);

function Demo() {
    const { t } = useTranslation();

    useEffect(() => {

        if (window.innerWidth > 1550) {
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
        } else if (window.innerWidth > 700) {
            gsap.to("#demo .vector-left", {
                scrollTrigger: {
                    trigger: "#demo",
                    start: "center bottom",
                    end: "top top",
                    scrub: true
                },
                strokeDashoffset: "1700",
                ease: "linear"
            })
        } else {
            gsap.to("#demo .vector-left", {
                scrollTrigger: {
                    trigger: "#demo",
                    start: "bottom bottom",
                    end: "top+=50px top",
                    scrub: true
                },
                strokeDashoffset: "1630",
                ease: "linear"
            })
        }

        if (window.innerWidth > 700) {
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
        } else if (window.innerWidth > 576) {
            gsap.to("#demo .vector-right", {
                scrollTrigger: {
                    trigger: "#demo",
                    start: "top-=100px center",
                    end: "bottom-=100px bottom",
                    scrub: true
                },
                strokeDashoffset: "0px",
                ease: "linear"
            })
        } else {
            gsap.to("#demo .vector-right", {
                scrollTrigger: {
                    trigger: "#demo",
                    start: "top-=100px center",
                    end: "bottom bottom",
                    scrub: true
                },
                strokeDashoffset: "0px",
                ease: "linear"
            })
        }

    }, [])

    return (
        <section id="demo">
            <div className="global-wrapper">
                <div className="left-part">
                    <img src={"plate-360.gif"} alt="Video of the game rotating" />
                </div>
                <div className="right-part">
                    <h2 className="title">{t('demo.title')}</h2>
                    <p className="sub-title">{t('demo.subTitle1')}</p>
                    <p className="sub-title">{t('demo.subTitle2')}</p>
                    <a href={"#preparation"} draggable="false">
                        <p className="button">{t('demo.prepareVisit')}</p>
                    </a>
                </div>
            </div>
            <VectorLeft className="vector-left" />
            <VectorRight className="vector-right" />
        </section>
    )
}
export default Demo