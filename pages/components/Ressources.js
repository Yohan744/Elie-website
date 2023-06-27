import { useTranslation } from 'react-i18next';
function Ressources(props) {
    const { t } = useTranslation();

    return (
        <div className={`download-wrapper ${props.margin ? "" : "no-margin"}`}>
            <a
                href={"masthead-background.png"}
                download="plan_2023.pdf"
                rel="noopener noreferrer"
                target="_blank"
                draggable="false"
            >
                <div className="download">
                    <div className="info">
                        <h6>{t('ressources.mapTitle')}</h6>
                        <p>plan_2023.pdf</p>
                    </div>
                    <img src={"download-icon.svg"} alt={t('ressources.downloadIconAltText')} className="icon" />
                </div>
            </a>
            <a
                href={"masthead-background.png"}
                download="fiche_officielle_2023.pdf"
                rel="noopener noreferrer"
                target="_blank"
                draggable="false"
            >
                <div className="download">
                    <div className="info">
                        <h6>{t('ressources.pedagogicalSheetTitle')}</h6>
                        <p>fiche_officielle_2023.pdf</p>
                    </div>
                    <img src={"download-icon.svg"} alt={t('ressources.downloadIconAltText')} className="icon" />
                </div>
            </a>
            <a
                href={"masthead-background.png"}
                download="reglement_elie_2023.pdf"
                rel="noopener noreferrer"
                target="_blank"
                draggable="false"
            >
                <div className="download">
                    <div className="info">
                        <h6>{t('ressources.rulesTitle')}</h6>
                        <p>reglement_elie_2023.pdf</p>
                    </div>
                    <img src={"download-icon.svg"} alt={t('ressources.downloadIconAltText')} className="icon" />
                </div>
            </a>
        </div>
    );
}

export default Ressources;
