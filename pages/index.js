import Masthead from "./components/Masthead";
import Demo from "./components/Demo";
import Information from "./components/Information";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Advice from "./components/Advice";
import Preparation from "./components/Preparation";

export default function Home() {
    return (
        <main>
            <Masthead/>
            <Demo/>
            <Information/>
            <Gallery/>
            <Preparation/>
            <Reservation/>
            <Advice/>
        </main>
    )
}
