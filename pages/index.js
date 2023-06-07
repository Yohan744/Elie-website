import Masthead from "./components/Masthead";
import Demo from "./components/Demo";
import Information from "./components/Information";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Advice from "./components/Advice";
import Preparation from "./components/Preparation";
import {useEffect} from "react";
import Lenis from '@studio-freight/lenis'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

    useEffect(() => {

        const lenis = new Lenis({
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 1.75,
            infinite: false,
        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
            lenis.raf(time * 1000)
        })

    }, [])

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
