import { useTranslation } from 'react-i18next';

function Gallery() {
    const { t } = useTranslation();

    return (
        <section id="gallery">
            <div className="global-wrapper">
                <div>
                    <h3>{t('gallery.title')}</h3>
                    <p>{t('gallery.description')}</p>
                </div>
                <div className="picture">
                    <img src={"gallery-general.png"} alt={t('gallery.altText')} />
                </div>
                <div className="picture">
                    <img src={"gallery-kids.png"} alt={t('gallery.altText')} />
                </div>
                <div className="picture">
                    <img src={"gallery-fish.png"} alt={t('gallery.altText')} />
                </div>
                <div className="picture">
                    <img src={"gallery-poster.png"} alt={t('gallery.altText')} />
                </div>
                <div className="picture">
                    <img src={"gallery-room.png"} alt={t('gallery.altText')} />
                </div>
                <div className="picture">
                    <img src={"gallery-eat.png"} alt={t('gallery.altText')} />
                </div>
                <div className="picture">
                    <img src={"gallery-night.png"} alt={t('gallery.altText')} />
                </div>
            </div>
        </section>
    );
}

export default Gallery;
