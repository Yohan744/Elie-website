import { useTranslation, Trans } from 'react-i18next';

function Information() {
    const { t } = useTranslation();

    return (
        <section id="information">
            <div className="global-wrapper">
                <h3>{t('information.title')}</h3>
                <div className="info-wrapper">
                    <div className="info">
                        <img src={"animal-deer.svg"} alt={t('information.icons.animalAltText')} />
                        <h5 className="title">{t('information.icons.linkWithCurriculum.title')}</h5>
                        <p>{t('information.icons.linkWithCurriculum.description')}</p>
                    </div>
                    <div className="info">
                        <img src={"animal-fox-pink.svg"} alt={t('information.icons.animalAltText')} />
                        <h5 className="title">{t('information.icons.gradeLevel.title')}</h5>
                        <p>{t('information.icons.gradeLevel.description')}</p>
                    </div>
                    <div className="info">
                        <img src={"animal-wolf-pink.svg"} alt={t('information.icons.animalAltText')} />
                        <h5 className="title">{t('information.icons.duration.title')}</h5>
                        <p>{t('information.icons.duration.description')}</p>
                    </div>
                </div>
            </div>
            <a href="#" draggable="false">
                <div className="contact-us">
                    <p>{t('information.contactUs')}</p>
                </div>
            </a>
        </section>
    );
}

export default Information;
