import React, { useEffect } from "react";
import './About.css'


const About = () => {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const aboutContent = document.querySelector('.about-content')

      if (aboutContent) {
        const elementTop = aboutContent.getBoundingClientRect().top

        if (elementTop < window.innerHeight) {
          aboutContent.classList.add('reveal')
        }
      }
    })
  }, [])


  return (
    <section className="about" id="about">
      <div className="about-content">
        <div>
          <h2 className="heading">About <span>Us</span></h2>
        </div>
        <div>
          <h3>Gaming Store for All Ages</h3>
          <p>
            Welcome to our gaming store! We're a passionate team on a mission to create a space where everyone, regardless of age, can come and play, learn, and have a great time. Located in the heart of Saudi Arabia, our store is dedicated to providing a fun and inclusive environment for gamers of all ages.
          </p>
        </div>
        <div className="about-img">
          <div>
            <img src="/images/about1.jpg" alt="" />
          </div>
          <div>
            <img src="/images/about2.jpg" alt="" />
          </div>
          <div>
            <img src="/images/about3.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
