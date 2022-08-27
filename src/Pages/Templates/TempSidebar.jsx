import React from "react";
import styles from "./Templates.module.css";

const TempSidebar = () => {
  return (
    <div className={styles.tempside}>
      <h3>VIEW BY</h3>
      <div>
        <h3>Recommended for you</h3>
        <p>All templates</p>
        <p>New</p>
        <p>Popular</p>
      </div>
      <div>
        <h3>TYPES OF TEMPLATES</h3>
        <p>About Us</p>
        <p>Amazon Promo</p>
        <p>Behind The Scenes</p>
        <p>Celebrations</p>
        <p>Education</p>
        <p>Event</p>
        <p>Explaniner</p>
        <p>Holiday</p>
        <p>List</p>
        <p>Motivational</p>
        <p>Narrative</p>
        <p>Product Promotion</p>
        <p>Real Estate</p>
        <p>Service Promotion</p>
        <p>Slideshow</p>
        <p>Teaser</p>
        <p>Testimonial</p>
        <p>Tutorial</p>
        <p>Valentine's Day</p>
        <p>Workplace</p>
      </div>
    </div>
  );
};

export default TempSidebar;
