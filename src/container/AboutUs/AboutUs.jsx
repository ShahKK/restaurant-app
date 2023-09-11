import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our restaurant has a warm and inviting atmosphere, with traditional Japanese decor and a welcoming staff. We strive to make every guest feel like they are visiting Japan with every bite they take.</p>
        {/*
        <button type="button" className="custom__button">Know More</button>
        */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Soma is a traditional Japanese eatery that has been serving delicious and authentic Japanese cuisine to the community for many years. Our restaurant is named after the legendary Soma, a renowned chef in ancient Japan known for his culinary skills and dedication to perfecting the art of Japanese cooking.</p>
        {/*
        <button type="button" className="custom__button">Know More</button>
        */}
      </div>
    </div>
  </div>
);

export default AboutUs;
