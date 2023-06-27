import { useTranslation } from 'react-i18next';

function LanguageSelector({ setLanguage }) {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    return (
        <div>
            <button onClick={() => handleLanguageChange('fr')}>{t('FR')}</button>
            <button onClick={() => handleLanguageChange('en')}>{t('EN')}</button>
        </div>
    );
}

export default LanguageSelector;
