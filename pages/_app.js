import '../styles/style.css'
import Header from "./components/Header";
import Home from "./index";
import Footer from "./components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Header/>
            <Home/>
            <Footer/>
        </>
    )
}

export default MyApp