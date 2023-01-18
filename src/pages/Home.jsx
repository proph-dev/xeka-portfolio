import React from 'react';
import { About } from '../components/about/About';
import { BannerHero } from '../components/banner-hero/BannerHero';
import { Portfolio } from '../components/portfolio/Portfolio';
import { Contact } from '../components/contact/Contact';

function Home() {

  return (
    <div>
      {/* Banner hero */}
      <BannerHero />

      {/* About us */}
      <About />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default Home;