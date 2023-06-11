import '../styles/style.css'
import Header from "./components/Header";
import Home from "./index";
import Footer from "./components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp