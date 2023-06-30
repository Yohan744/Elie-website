import { useTranslation } from 'react-i18next';
import Link from "next/link";

function Advice() {
    const { t } = useTranslation();

    return (
        <section id="advice">
            <div className="global-wrapper">
                <div className="info">
                    <h3 className="title">{t('advice.title')}</h3>
                    <p className="paragraph">{t('advice.paragraph')}</p>
                    <Link href={"/profil#advice"} className="give-advice" draggable="false">
                        <p>{t('advice.giveAdvice')}</p>
                    </Link>
                </div>

                <div className="advice-wrapper">
                    <div className="advice-left">
                        <div className="advice">
                            <img src={"animal-fox.png"} alt="Fox icon" />
                            <h5 className="name">Tristan</h5>
                            <p className="quote">{t('advice.tristanQuote')}</p>
                            <div className="type">
                                <p>{t('advice.student')}</p>
                            </div>
                        </div>

                        <div className="advice">
                            <img src={"animal-crow-green.svg"} alt="Crow icon" />
                            <h5 className="name">Sarah</h5>
                            <p className="quote">{t('advice.sarahQuote')}</p>
                            <div className="type prof">
                                <p>{t('advice.teacher')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="advice-right">
                        <div className="advice">
                            <img src={"animal-flamingo-green.svg"} alt="Flamingo icon" />
                            <h5 className="name">Éric</h5>
                            <p className="quote">{t('advice.ericQuote')}</p>
                            <div className="type prof">
                                <p>{t('advice.teacher')}</p>
                            </div>
                        </div>

                        <div className="advice">
                            <img src={"animal-jellyFish-green.svg"} alt="Jelly fish icon" />
                            <h5 className="name">Clara</h5>
                            <p className="quote">{t('advice.claraQuote')}</p>
                            <div className="type">
                                <p>{t('advice.student')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advice;
