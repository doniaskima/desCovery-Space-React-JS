import React from 'react';
import Article from '../../components/article/Article';
import { pic1, pic2, pic3, pic4, pic5 } from './imports';
import './gallery.css';

const Blog = () => (
  <div className="nasa__blog section__padding" id="blog">
    <div className="nasa__blog-heading">
      <h1 className="gradient__text">Every generation has the obligation to free <br/> men's minds for a look at new worlds ...</h1>
    </div>
    <div className="nasa__blog-container">
      <div className="nasa__blog-container_groupA">
        <Article imgUrl={pic1} date="July 20, 1969." text="The brightest and largest object in our night sky, the Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years. The Moon was likely formed after a Mars-sized body collided with Earth." />
      </div>
      <div className="nasa__blog-container_groupB">
        <Article imgUrl={pic3} date="juil 13, 2022" text="NASA Reveals Webb Telescope’s First Images of Unseen Universe" />
        <Article imgUrl={pic2} date="juil 13, 2022" text="Yesterday, NASA and its partners, ESA (European Space Agency) and CSA (Canadian Space Agency), released the full set of the first full-color images and spectroscopic data from the James Webb Space Telescope." />
        <Article imgUrl={pic4} date="The images, which uncover a collection of cosmic features elusive until now, are available at: nasa.gov/webbfirstimages." />
        <Article imgUrl={pic5} date="The James Webb Space Telescope is the world’s largest, most powerful, and most complex space science telescope ever built. Webb will solve mysteries in our solar system, look beyond to distant worlds around other stars, and probe the mysterious structures and origins of our universe and our place in it. Webb is an international program led by NASA with its partners, ESA (European Space Agency) and the Canadian Space Agency." />
      </div>
    </div>
  </div>
);

export default Blog;
