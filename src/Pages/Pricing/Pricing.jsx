import React from "react";
import styles from "./Pricing.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"

const Pricing = () => {
  return (
    <div>
      {/* 1st section navbar */}
      <div>
        <Navbar />
      </div>
      <div className={styles.seconddiv}>
        <p>Choose your Plan</p>
      </div>
      <div className={styles.thirddiv}>
        <div>
          <p>Get Started with the free account</p>
        </div>
        <div>
          <button>SIGN UP FOR FREE</button>
        </div>
      </div>
      <div className={styles.fourthdiv}>
        <p>Annual</p>
        <p>Monthly</p>
      </div>

      <div className={styles.fivesection}>
        <div>
          <h2>Free</h2>
          <p>Create unlimited videos.</p>
          <p>Free forever!</p>
          <h2>Rs 0/month</h2>
          <button>SIGN UP FOR FREE</button>
          <h3>All our standard features, and:</h3>
          <p>Animoto branding on your videos</p>
        </div>
        <div>
          <h2>Basic</h2>
          <p>Create unbranded video with<br/> unlimited downloads</p>
          <h2>Rs 290/month</h2>
          <p>Billed as Rs 3480 every year</p>
          <button>Buy Basic</button>
          <h3>All our standard features, ans:</h3>
          <p>No Animiro branding on your videos</p>
          <p>High quality video(HD 1080p)</p>
          <p>Unlimited downloads</p>
        </div>
        <div>
          <h2>Professional</h2>
          <p>Create customizes video with <br/> professional tools</p>
          <h2>Rs 560/month</h2>
          <p>Billed as Rs 6730 every year</p>
          <button>BUY PROFESSIONAL</button>
          <h3>Everything in Basic, and:</h3>
          <p>No Animiro branding on your videos </p>
          <p>Add your logo and color</p>
          <p>1 million+ licensed stock photo & videos from Getty Images</p>
          <p>3000 licensed music track</p>
          <p>Voice-over</p>
          <p>1 saved brand</p>
          <p>40 professional fonts</p>
          <p>High quality videos (HD 1080p)</p>
        </div>
        <div>
          <h2>Professional Plus</h2>
          <p>Vreate branded video at sacle <br/> with advance tools</p>
          <h2>Rs 1457/month</h2>
          <p>Billed as Rs 17490 every year</p>
          <button>BUY PROFESSIONAL PLUS</button>
          <h3>Everything in Professional , and:</h3>
          <p>Accounts for up to 3 user</p>
          <p>License to resell to business</p>
          <p>30-minute consiltant with video expert</p>
          <p>Collect time-stamped comment</p>
          <p>Multiple saved brands</p>
          <p>100 million+ Premium licensed photo & video from Getty Image</p>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div>
          <div>
            <p>Hear from our customers</p>
          </div>
          <div>
            <img
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              style={{ height: "136px", width: "136px" }}
              src="https://images.ctfassets.net/00i767ygo3tc/5BqRKnEuMFaOAav2D4vSSJ/f9c069faa5c0f8f8831f4f7f6463d351/TestimonialOneIllustration.png?w=320&h=299&q=80&fm=webp"
            />
            <h3>MATT CAVALLARO</h3>
            <p>
              FOUNDER, NEST HOMEWARE “Running our Animoto video on Facebook and
              Instagram not only increased awareness of the Nest brand, but we
              also made 4x our usual online sales.”
            </p>
          </div>
          <div>
            <img
              style={{ height: "136px", width: "136px" }}
              src="https://images.ctfassets.net/00i767ygo3tc/1TuMlRQQJMVXTOy7ZjjuPl/ac0c443010035659113644460fb34f81/TestimonialTwoIllustration.png?w=320&h=299&q=80&fm=webp"
            />
            <h3>REBECCA FANCHER</h3>
            <p>
              SR. DIRECTOR, AMERICAN HEART
              <br /> ASSOCIATION
              <br /> “Our Animoto video was a quick way for us to let our
              audience know about our event, and show them how simple it was to
              register or donate. Plus, we can easily adjust our video so they
              work on all platforms. A true time-saver.”
            </p>
          </div>
          <div>
            <img
              style={{ height: "136px", width: "136px" }}
              src="https://images.ctfassets.net/00i767ygo3tc/bqjxtmuX7vs1uFe4uasV1/ef5338ce6588039752c6aff8fe89b843/TestimonialThreeIllustration.png?w=320&h=299&q=80&fm=webp"
            />
            <h3>MARY MANNIX</h3>
            <p>
              REAL ESTATE AGENT, BERKSHIRE
              <br /> HATHAWAY <br />
              “Animoto helps me to build a stronger brand in the competitive
              real estate marketplace, and their real estate templates make it
              easy for me to create listings videos and virtual tours.”
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Pricing;
