import React, { useEffect } from "react";
import "./Games.css"

const Games = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const gamesContent = document.querySelector('.games')

            if (gamesContent) {
                const elementTop = gamesContent.getBoundingClientRect().top

                if (elementTop < window.innerHeight) {
                    gamesContent.classList.add('reveal')
                }
            }
        })
    }, [])

    return (
        <section class="games" id="games">
            <h2 class="heading">Popular <span>Games</span> In Store!</h2>
            <div class="games-container">
                <div class="games-box">
                    <img src="/images/game1.jpeg" alt="" />
                    <div class="games-layer">
                        <h4>grand theft auto v</h4>
                    </div>
                </div>
                <div class="games-box">
                    <img src="/images/game2.avif" alt="" />
                    <div class="games-layer">
                        <h4>Elden Ring</h4>
                    </div>
                </div>
                <div class="games-box">
                    <img src="/images/game3.jpeg" alt="" />
                    <div class="games-layer">
                        <h4>Hades</h4>
                    </div>
                </div>
                <div class="games-box">
                    <img src="/images/game4.webp" alt="" />
                    <div class="games-layer">
                        <h4>Apex Legends</h4>
                    </div>
                </div>
                <div class="games-box">
                    <img src="/images/game5.jpeg" alt="" />
                    <div class="games-layer">
                        <h4>call of duty modern warfare 2</h4>
                    </div>
                </div>
                <div class="games-box">
                    <img src="/images/game6.jpeg" alt="" />
                    <div class="games-layer">
                        <h4>Red Dead Redemption 2</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Games;