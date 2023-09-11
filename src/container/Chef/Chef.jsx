import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Preserving the rich cultural heritage of Japanese fine dining in the Western world.</p>
        </div>
        <p className="p__opensans"> From the precise technique and beautiful presentation, to the harmony of flavors and respect for the ingredients, it is a true art form that should be experienced by all. It is my honor to introduce and adapt these traditional techniques to create an authentic and enjoyable dining experience for all of my guests. &#39;&#39; </p>
      </div>

      <div className="app__chef-sign">
        <p>Soma Yukihira</p>
        <p className="p__opensans">Chef & Founder</p>
        {/*
        <img src={images.sign} alt="sign_image" />
        */}
      </div>
    </div>
  </div>
);

export default Chef;
