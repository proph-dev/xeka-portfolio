import React from 'react';
import { About } from '../components/about/About';
import { BannerHero } from '../components/banner-hero/BannerHero';
import { Portfolio } from '../components/portfolio/Portfolio';

function Home() {

  return (
    <div>
      {/* Banner hero */}
      <BannerHero />

      {/* About us */}
      <About />

      {/* Portfolio */}
      <Portfolio />
    </div>
  );
}

export default Home;