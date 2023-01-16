import React from 'react';
import { About } from '../components/about/About';
import { BannerHero } from '../components/banner-hero/BannerHero';

function Home() {

  return (
    <div>
      {/* Banner hero */}
      <BannerHero />

      {/* About us */}
      <About />
    </div>
  );
}

export default Home;