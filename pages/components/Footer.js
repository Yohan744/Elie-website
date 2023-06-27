import {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import VectorLeft from '../../asset/svg/footer-vector-left-blue.svg';
import VectorRight from '../../asset/svg/footer-vector-right-blue.svg';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const { t } = useTranslation();

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
                    <a className="link" href={"#demo"} draggable="false">{t('footer.exhibition')}</a>
                    <a className="link" href={"#reservation"} draggable="false">{t('footer.booking')}</a>
                    <a className="link" href={"#preparation"} draggable="false">{t('footer.educationalSheets')}</a>
                    <a className="link" href={"#advice"} draggable="false">{t('footer.reviews')}</a>
                </div>
                <div className="sub-link-wrapper">
                    <a className="sub-link" href="#">{t('footer.privacyPolicy')}</a>
                    <a className="sub-link margin"> - </a>
                    <a className="sub-link" href="#">{t('footer.legalMentions')}</a>
                </div>
                <VectorLeft className="vector-left"/>
                <VectorRight className="vector-right"/>
            </div>

        </footer>
    );
}

export default Footer;
