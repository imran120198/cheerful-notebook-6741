import React from "react";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.main_footer}>
        <div>
          <h3>USES</h3>
          <p>Marketing Video</p>
          <p>Video ad</p>
          <p>How-to video</p>
          <p>Slideshow video</p>
          <p>Social Media</p>
          <p>Promo video</p>
          <p>Birthday video</p>
          <p>Intro / Outro videos</p>
          <p>Explainer video</p>
          <p>Email marketing</p>
        </div>
        <div>
          <h3>ANIMOTO FOR</h3>
          <p>Business</p>
          <p>Photography</p>
          <p>Real Estate</p>
          <p>Non-profit</p>
          <p>Education</p>
          <p>Ecommerce</p>
          <p>Fitness</p>
          <p>HR / People Ops</p>
          <p>Marketing Agency</p>
        </div>
        <div>
          <h3>FEATURES</h3>
          <p>Video commenting tool</p>
          <p>Screen recorder</p>
          <p>Photo video maker</p>
          <p>Music library</p>
          <p>Online video editor</p>
          <p>Templates</p>
          <p>Video trimming</p>
          <p>Stock library</p>
          <p>Voice over</p>
        </div>
        <div>
          <h3>COMPANY</h3>
          <p>Support</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Affiliates</p>
          <p>Privacy policy</p>
          <p>Terms of use</p>
          <p>Animoto Tutorials</p>
        </div>
        <div>
          <h3>CONNECT</h3>
          <div className={styles.social}>
            <div>
              <a href="https://www.facebook.com/Animoto">
                <img
                  className={styles.foot_img}
                  src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-2019-1597680-1350125.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCeqtYy6WpYkZ3Q_EUnY0fVQ">
                <img
                  className={styles.foot_img}
                  src="https://cdn.iconscout.com/icon/free/png-64/movie-53-151109.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Animoto">
                <img
                  className={styles.foot_img}
                  src="https://cdn.iconscout.com/icon/free/png-64/twitter-53-189787.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/animoto/">
                <img
                  className={styles.foot_img}
                  src="https://cdn.iconscout.com/icon/free/png-64/instagram-1868978-1583142.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/animoto">
                <img
                  className={styles.foot_img}
                  src="https://cdn.iconscout.com/icon/free/png-64/linkedin-2752135-2284952.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_foot}>
        <img
          style={{ marginTop: "20px" }}
          src="https://animoto.com/static/Logo-769512d18812f2135069123e6840b976.svg"
          alt=""
        />
        <p>© 2022 Animoto Inc. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
