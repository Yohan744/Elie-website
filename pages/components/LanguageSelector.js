import { useTranslation } from 'react-i18next';

function LanguageSelector({ setLanguage }) {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    return (
        <div className="link">
            <a onClick={() => handleLanguageChange('fr')}>{t('FR')} | </a>
            <a onClick={() => handleLanguageChange('en')}>{t('EN')}</a>
        </div>
    );
}

export default LanguageSelector;
