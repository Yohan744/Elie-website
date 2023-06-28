import Ressources from "./components/Ressources";
import {useEffect, useState} from "react";
import Link from "next/link";
import Vector from "../asset/svg/profil-vector-pink.svg"
import {gsap} from 'gsap';
import { useTranslation } from 'react-i18next';

export default function Profil() {
    const { t } = useTranslation();
    const [nameTmp, setNameTmp] = useState("");
    const [lastNameTmp, setLastNameTmp] = useState("");

    const [name, setName] = useState("Sarah");
    const [lastName, setLastName] = useState("Dubreuil");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const [type, setType] = useState("");
    const [nameAdvice, setNameAdvice] = useState("");
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.to("#profil .vector", {
            duration: 0.8,
            delay: 0.2,
            strokeDashoffset: "1500px",
            ease: "ease.power4.out",
        });
    }, []);

    useEffect(() => {
        verifyForm();
    }, [nameTmp, lastNameTmp, mail, password]);

    useEffect(() => {
        verifyAdvice();
    }, [type, advice, nameAdvice]);

    function handleCLickOnValidateProfil() {
        const validateButton = document.querySelector(".modify .validate-button");
        const inputModify = document.querySelectorAll(".modify input");
        if (validateButton.classList.contains("is-active")) {
            setName(nameTmp);
            setLastName(lastNameTmp);
            setNameTmp("");
            setLastNameTmp("");
            setMail("");
            setPassword("");
            inputModify.forEach((input) => {
                input.value = "";
            });
        }
    }

    function verifyForm() {
        const validateButton = document.querySelector(".modify .validate-button");
        if (nameTmp !== "" && lastNameTmp !== "" && mail !== "" && password !== "") {
            validateButton.classList.add("is-active");
        } else {
            validateButton.classList.remove("is-active");
        }
    }

    function handleTypeClick(e) {
        const allTypes = document.querySelectorAll(".type-wrapper .type");
        if (e.target.classList.contains("is-active")) {
            setType("");
            e.target.classList.remove("is-active");
        } else {
            setType(e.target.innerHTML);
            allTypes.forEach((type) => {
                type.classList.remove("is-active");
            });
            e.target.classList.add("is-active");
        }
    }

    function verifyAdvice() {
        const validateButton = document.querySelector(".give-advice .validate-button");
        if (type !== "" && nameAdvice !== "" && advice !== "") {
            validateButton.classList.add("is-active");
        } else {
            validateButton.classList.remove("is-active");
        }
    }

    function handleCLickOnAdviceButton() {
        const validateButton = document.querySelector(".give-advice .validate-button");
        const inputName = document.querySelectorAll(".give-advice .wrapper .name, .give-advice textarea");
        const allTypes = document.querySelectorAll(".type-wrapper .type");
        if (validateButton.classList.contains("is-active")) {
            inputName.forEach((input) => {
                input.value = "";
            });
            allTypes.forEach((type) => {
                type.classList.remove("is-active");
            });
            setType("");
            setNameAdvice("");
            setAdvice("");
        }
    }

    return (
        <main id="profil">
            <Vector className="vector" />

            <div className="left-part">
                <h3 className="title">
                    {name} {lastName}
                </h3>

                <div className="modify wrapper">
                    <h5 className="sub-title">{t('profil.modifyProfileTitle')}</h5>

                    <h6>{t('profil.firstNameLabel')}</h6>
                    <div className="wrapper">
                        <input
                            type="text"
                            placeholder={t('profil.firstNamePlaceholder')}
                            maxLength="30"
                            autoComplete="false"
                            onInput={(e) => setNameTmp(e.target.value)}
                        />
                        <img src={"pen.svg"} alt="Pen icon" />
                    </div>

                    <h6>{t('profil.lastNameLabel')}</h6>
                    <div className="wrapper">
                        <input
                            type="text"
                            placeholder={t('profil.lastNamePlaceholder')}
                            maxLength="30"
                            autoComplete="false"
                            onInput={(e) => setLastNameTmp(e.target.value)}
                        />
                        <img src={"pen.svg"} alt="Pen icon" />
                    </div>

                    <h6>{t('profil.emailLabel')}</h6>
                    <div className="wrapper">
                        <input
                            type="email"
                            placeholder={t('profil.emailPlaceholder')}
                            maxLength="30"
                            autoComplete="false"
                            onInput={(e) => setMail(e.target.value)}
                        />
                        <img src={"pen.svg"} alt="Pen icon" />
                    </div>

                    <h6>{t('profil.passwordLabel')}</h6>
                    <div className="wrapper">
                        <input
                            type="password"
                            placeholder={t('profil.passwordPlaceholder')}
                            autoComplete="false"
                            maxLength="30"
                            onInput={(e) => setPassword(e.target.value)}
                        />
                        <img src={"pen.svg"} alt="Pen icon" />
                    </div>

                    <div className="validate-button" onClick={() => handleCLickOnValidateProfil()}>
                        {t('profil.validateButton')}
                    </div>
                </div>

                <div className="dot-line"></div>

                <div className="give-advice wrapper">
                    <h5 className="sub-title">{t('profil.giveAdviceTitle')}</h5>

                    <h6>{t('profil.profileLabel')}</h6>

                    <div className="type-wrapper">
                        <div className="type" onClick={(e) => handleTypeClick(e)}>
                            {t('profil.teacherType')}
                        </div>
                        <div className="type" onClick={(e) => handleTypeClick(e)}>
                            {t('profil.studentType')}
                        </div>
                    </div>

                    <p className="info">{t('profil.adviceInfo')}</p>

                    <h6>{t('profil.firstNameLabel')}</h6>
                    <div className="wrapper">
                        <input
                            type="text"
                            placeholder={t('profil.firstNamePlaceholder')}
                            maxLength="30"
                            className="name"
                            onInput={(e) => setNameAdvice(e.target.value)}
                        />
                        <img src={"pen.svg"} alt="Pen icon" />
                    </div>

                    <h6>{t('profil.adviceLabel')}</h6>
                    <div className="wrapper textarea">
            <textarea
                placeholder={t('profil.advicePlaceholder')}
                maxLength="150"
                className="name"
                onInput={(e) => setAdvice(e.target.value)}
            />
                        <img src={"pen.svg"} alt="Pen icon" />
                    </div>

                    <div className="validate-button" onClick={() => handleCLickOnAdviceButton()}>
                        {t('profil.validateButton')}
                    </div>
                </div>
            </div>

            <div className="right-part">
                <div className="reservation wrapper">
                    <h5 className="sub-title">{t('profil.currentReservationTitle')}</h5>

                    <div className="reservation-wrapper">
                        <h5>{t('profil.slotLabel')}</h5>
                        <h6>{t('profil.slotDate')}</h6>

                        <h5>{t('profil.locationLabel')}</h5>
                        <h6>{t('profil.location')}</h6>

                        <h5>{t('profil.groupLabel')}</h5>
                        <h6>{t('profil.groupInfo')}</h6>
                    </div>

                    <div className="info-wrapper">
                        <Link href="/profil" className="download" draggable="false">
                            <p>{t('profil.downloadTicket')}</p>
                            <img src={"download-white.svg"} alt="Download icon" />
                        </Link>

                        <Link href="/#reservation" className="modify" draggable="false">
                            <p>{t('profil.modify')}</p>
                            <img src={"arrow-right-grey.svg"} alt="Download icon" />
                        </Link>
                    </div>
                </div>

                <div className="resssources wrapper">
                    <h5 className="sub-title margin">{t('profil.resourcesTitle')}</h5>

                    <Ressources margin={false} />
                </div>

                <div className="questions wrapper">
                    <h5 className="sub-title margin">{t('profil.questionsTitle')}</h5>

                    <h6 className="text-medium">{t('profil.phone')}</h6>
                    <p className="text">04 50 33 72 18</p>

                    <h6 className="text-medium">{t('profil.email')}</h6>
                    <p className="text">Contact@elie.fr</p>
                </div>
            </div>
        </main>
    );
}