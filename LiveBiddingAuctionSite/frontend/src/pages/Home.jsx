import React from 'react'
import Achievements from '../components/Achievements';
import UpcomingEvents from '../components/UpcomingEvents';
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer';
import OurStars from '../components/OurStars';
import Hero from '../components/Hero/Hero';
import NavSpace from '../components/NavSpace';

const Home = () => {
  return (
    <div>


      <Hero />
      <Achievements />
      <OurStars />
      <UpcomingEvents />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home