import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.featurefirst}>
        <div>
          <h2>DO-IT-YOURSELF</h2>
          <img
            src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            alt=""
          />
          <p>Online Video Editor</p>
          <p style={{ fontSize: "22px" }}>
            Powerful features that make video editing easy. Create and customize
            your own videos with Animoto’s easy-to-use online video editor. No
            experience necessary.
          </p>
          <button>GET FREE STARTED</button>
        </div>
      </div>
      {/* 2nd section */}
      <div className={styles.secondFeature}>
        <div>
          <div>
            <p>Everything you need to create stunning video</p>
            <img
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
              alt=""
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>STOCK LIBARY</h2>
              </div>
              <div>
                <p>
                  Save time and money tracking down stock with our built-in
                  library of millions of photos and videos from Getty Images.
                </p>
              </div>
            </div>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>PHOTOS AND VIDEO CLIPS</h2>
              </div>
              <div>
                <p>
                  Upload your own images and video clips with ease. Then drag
                  and drop right into your project.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>CREATE ANYWHERE</h2>
              </div>
              <div>
                <p>
                  Log in from a Mac or PC using your preferred browser. All your
                  videos will be ready for you in our cloud-based video editor.
                </p>
              </div>
            </div>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>MUSIC LIBRARY</h2>
              </div>
              <div>
                <p>
                  Select a song to add to your video from our library of
                  thousands of licensed tracks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <video className={styles.videodiv} controls>
            <source src="https://d2of6bhnpl91ni.cloudfront.net/cms/Animoto-features-for-video-editing-to-customize-your-videos-8de6036303.mp4" />
          </video>
        </div>
      </div>
      {/* 3rd section  */}
      <div className={styles.thirdFeature}>
        <div>
          <video className={styles.videodiv} controls>
            <source src="https://d2of6bhnpl91ni.cloudfront.net/cms/Animoto-features-for-video-editing-to-customize-your-videos-features-8dd7f2dfdd.mp4" />
          </video>
        </div>
        <div>
          <div>
            <p>Tools to help you tell your story</p>
            <img
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
              alt=""
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>TIME-SAVING TEMPLATES</h2>
              </div>
              <div>
                <p>
                  Get a head start on your video with a customizable template.
                  We build in social media best practices, you make it your own.
                </p>
              </div>
            </div>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>TEXT AND FONTS</h2>
              </div>
              <div>
                <p>
                  Captivate your audience with eye-catching text effects and a
                  selection of over 40 professional fonts.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>CROPPING AND TRIMMING</h2>
              </div>
              <div>
                <p>
                  Trim your footage, crop your photos, and adjust the timing of
                  your media without ever leaving Animoto.
                </p>
              </div>
            </div>
            <div className={styles.fourboxdiv}>
              <div>
                <h2>VOICE-OVER</h2>
              </div>
              <div>
                <p>
                  Create a personal connection with your voice. Easily record,
                  upload, and edit your voice-over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4th start */}
      <div className={styles.fourthdiv}>
        <div>
          <p>MAKE IT YOUR OWN</p>
        </div>
        <div>
          <p>Customize to fit your brand</p>
          <img
            src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            alt=""
          />
        </div>
        <div>
          <p>
            Create videos tailor-made for your needs. Our flexible tools are
            easy-to-use and put the controls in your hands.
          </p>
        </div>
        <div>
          <video className={styles.fourthvideo} controls>
            <source src="https://d2of6bhnpl91ni.cloudfront.net/cms/09-2020_FeaturesPage_CustomizeToFitYourBrand%202_7_Compressed-03e8db1cf6.mp4" />
          </video>
        </div>
      </div>
      {/* 4th end */}

      {/* 5th start */}
      <div className={styles.fivthdiv}>
        <div>
          <div className={styles.fivesubdiv}>
            <div>
              <h2>LOGO WATERMARK</h2>
            </div>
            <div>
              <p>
                Keep your brand on display by adding your logo as a corner
                watermark throughout your video.
              </p>
            </div>
          </div>
          <div className={styles.fivesubdiv}>
            <div>
              <h2>THREE ASPECT RATIOS</h2>
            </div>
            <div>
              <p>
                Reach more people by optimizing your videos by platform. Resize
                from vertical to square to landscape in just a few clicks.
              </p>
            </div>
          </div>
          <div className={styles.fivesubdiv}>
            <div>
              <h2>REMOVE ANIMOTO BRANDING</h2>
            </div>
            <div>
              <p>
                The Animoto brand watermark will never appear on videos created
                with Professional and Professional Plus plans. Keep your brand
                in the spotlight.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.fivesubdiv}>
            <div>
              <h2>SAVED BRANDS</h2>
            </div>
            <div>
              <p>
                Save your colors, logo, and font once, and bring every video
                on-brand with just one click.
              </p>
            </div>
          </div>
          <div className={styles.fivesubdiv}>
            <div>
              <h2>FONT UPLOAD</h2>
            </div>
            <div>
              <p>Keep your videos 100% on brand with custom font upload.</p>
            </div>
          </div>
          <div className={styles.fivesubdiv}>
            <div>
              <h2>LIFETIME LICENSE</h2>
            </div>
            <div>
              <p>
                Your videos belong to you with a license that doesn’t expire.
                Download and post the videos you create online anywhere,
                anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 5th end */}
      <Footer />
    </div>
  );
};

export default Features;
