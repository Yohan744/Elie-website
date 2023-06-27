import PlusIconBlue from "../../public/plus-icon-blue.svg";
import {useEffect} from "react";
import { useTranslation } from 'react-i18next';

function Masthead() {
    const { t } = useTranslation();

    let actualPreviewIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (actualPreviewIndex === 2) {
                actualPreviewIndex = 0;
            } else {
                actualPreviewIndex++;
            }

            const actualPreview = document.querySelector(
                `.preview-wrapper .preview[id="${actualPreviewIndex}"]`
            );
            const previews = document.querySelectorAll(`.preview-wrapper .preview`);

            previews.forEach((preview) => {
                preview.classList.remove("show");
            });
            if (actualPreview) {
                actualPreview.classList.add("show");
            }

            const dots = document.querySelector(`.preview-wrapper .dots`);
            if (dots) {
                dots.setAttribute("data-active", actualPreviewIndex);
            }
        }, 3500);
    }, []);

    return (
        <section id={"masthead"}>
            <img
                src={"masthead-background.png"}
                alt={t('masthead.backgroundAltText')}
                className={"background-image"}
            />
            <div className={"global-wrapper"}>
                <div className={"top-wrapper"}>
                    <div className={"info"}>
                        <h1>{t('masthead.exhibitionTitle')}</h1>
                        <div className={"button-wrapper"}>
                            <a href={"#reservation"} draggable="false">
                                <div className={"button"}>
                                    <p>{t('masthead.reserveButtonText')}</p>
                                </div>
                            </a>
                            <a href={"#demo"} draggable="false">
                                <div className={"button"}>
                                    <p>{t('masthead.learnMoreButtonText')}</p>
                                    <img src={"plus-icon-blue.svg"} alt={t('masthead.plusIconAltText')} className="plus-icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={"video"}>
                        <img src={"video-preview.png"} alt={t('masthead.videoPreviewAltText')} />
                    </div>
                </div>
                <div className={"bottom-wrapper"}>
                    <div className={"news"}>
                        <div className={"left-part"}>
                            <p className={"sub-title"}>{t('masthead.newsSubtitle')}</p>
                            <h4 className={"title"}>{t('masthead.newsTitle')}</h4>
                        </div>
                        <div className={"right-part"}>
                            <p>{t('masthead.newsDescription')}</p>
                            <a href={"#demo"} className={"know-more"} draggable="false">
                                {t('masthead.newsLinkText')}
                            </a>
                        </div>
                    </div>
                    <div className={"preview-wrapper"}>
                        <div className="preview show" id="0">
                            <img src={"preview-0.png"} alt={t('masthead.preview0AltText')} />
                            <div className="text">
                                <p>{t('masthead.preview0Text')}</p>
                            </div>
                        </div>
                        <div className="preview" id="1">
                            <img src={"preview-1.png"} alt={t('masthead.preview1AltText')} />
                            <div className="text">
                                <p>{t('masthead.preview1Text')}</p>
                            </div>
                        </div>
                        <div className="preview" id="2">
                            <img src={"preview-2.png"} alt={t('masthead.preview2AltText')} />
                            <div className="text">
                                <p>{t('masthead.preview2Text')}</p>
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
                    <img src={"phone-blue.svg"} alt={t('masthead.phoneIconAltText')} />
                    <p>{t('masthead.phoneNumber')}</p>
                </div>
            </a>
        </section>
    );
}

export default Masthead;
