import '../styles/style.css';
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { i18n } from '../i18next';
import Header from "./components/Header";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, []);

    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default appWithTranslation(MyApp);