import Ressources from "./Ressources";
import { useTranslation, Trans } from 'react-i18next';

function Preparation() {
    const { t } = useTranslation();

    return (
        <section id="preparation">
            <div className="global-wrapper">
                <h3 className="title">{t('preparation.title')}</h3>
                <img src={"line-to-dot.svg"} alt={"Line icon"} className="lineToDot" />
                <h5 className={"sub-title"}>
                    {t('preparation.downloadResourcesSubtitle')}{' '}
                    <span>{t('preparation.downloadResourcesSpan')}</span>
                </h5>
                <Ressources margin={true} />
                <img src={"line-to-dot.svg"} alt={"Line icon"} className="lineToDot" />
                <h5 className={"sub-title"}>
                    <span>{t('preparation.confirmAttendanceSpan')}</span>{' '}
                    {t('preparation.confirmAttendanceSubtitle')}
                </h5>
                <img src={"line-to-dot.svg"} alt={"Line icon"} className="lineToDot margin-top" />
                <h5 className={"sub-title"}>
                    {t('preparation.prepareGroupsSubtitle')}{' '}
                    <span>{t('preparation.prepareGroupsSpan')}</span>
                </h5>
                <img src={"line-to-arrow.svg"} alt={"Line icon"} className="lineToArrow" />
            </div>
        </section>
    );
}

export default Preparation;
