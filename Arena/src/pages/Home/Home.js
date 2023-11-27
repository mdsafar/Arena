import React, { useEffect } from "react";
import './Home.css'


const Home = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const homeContent = document.querySelector('.home-content')

            if (homeContent) {
                const elementTop = homeContent.getBoundingClientRect().top

                if (elementTop < window.innerHeight) {
                    homeContent.classList.add('reveal')
                }
            }
        })
    }, [])

    return <>
        <section class="home" id="home">
            <div class="home-content">
                <h1><span>Arena</span> Gaming</h1>
                <div class="social-media">
                    <a href="/" ><i class="bi bi-instagram"></i></a>
                    <a href="/" ><i class="bi bi-facebook"></i></a>
                    <a href="/" ><i class="bi bi-twitter-x"></i></a>
                    <a href="/" ><i class="bi bi-youtube"></i></a>
                </div>
            </div>
        </section>
    </>
}

export default Home