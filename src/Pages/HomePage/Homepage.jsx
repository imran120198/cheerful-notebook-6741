import React from "react";
import styles from "../HomePage/Homepage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Navbar />

      {/* 1st section start */}
      <div className={styles.firstsection}>
        <div>
          <div>
            <p>DO-IT-YOURSELF</p>
            <img
              src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
              alt=""
            />
          </div>
          <div>
            <h1>Easily makes your own videos</h1>
          </div>
          <div>
            <p>
              Join millions of people creating and sharing videos with our easy
              drag and drop video maker. No experience necessary.
            </p>
          </div>
          <div>
            <button>GET STARTED FREE</button>
          </div>
        </div>
        <div>
          <video className={styles.firstsection_video} controls>
            <source
              src="https://d2of6bhnpl91ni.cloudfront.net/cms/03_New%20Aspirational%20V2_YT_Stream-b0e722c3fc.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* 1st section end */}
      {/* 2nd section start */}
      <div className={styles.secondSection}>
        <div>
          <div>
            <p>Put Video to work for your business</p>
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
            <img src="https://images.ctfassets.net/00i767ygo3tc/58RO6ExjLkW8a6SjV5lx18/18e776a3e0a9ef95bd8064d3c9a08db1/2022-04_SMB-Modules-from-HomePage_LP_Small-Business-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
            <h3>SMALL BUSINESS</h3>
            <p>
              Capture attention and engage your audience with professional
              videos.
            </p>
            <Link to="/learn">
              <p style={{ fontWeight: "bold" }}>LEARN MORE</p>
            </Link>
          </div>
          <div>
            <img src="https://images.ctfassets.net/00i767ygo3tc/3IS1ef7FvNE9FXQL0SR714/024a3b2eeefe6a41314abbdea86af677/2022-04_SMB-Modules-from-HomePage_LP_HR-People-Ops-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
            <h3>HR AND PEOPLE OPS</h3>
            <p>Boost engagement and company culture in hybrid workspaces.</p>
            <Link to="/learn">
              <p style={{ fontWeight: "bold" }}>LEARN MORE</p>
            </Link>
          </div>
          <div>
            <img src="https://images.ctfassets.net/00i767ygo3tc/76Ujd3ZGigsQm00DFwjJXp/2c922d8301472338849a1df2e483d630/2022-04_SMB-Modules-from-HomePage_LP_Marketing-Agencies-removebg-preview.png?w=612&h=572&q=80&fm=webp" />
            <h3>MARKETING AGENCIES</h3>
            <p>
              Wow your clients with videos that showcase and promote their
              brand.
            </p>
            <Link to="/learn">
              <p style={{ fontWeight: "bold" }}>LEARN MORE</p>
            </Link>
          </div>
        </div>
      </div>
      {/* 2nd section end */}

      {/* 3rd section start */}

      <div className={styles.thirdsection}>
        <div>
          <p>IMAGINE IT. CREATE IT</p>
        </div>
        <div>
          <p>Create quickly with video templates</p>
          <img
            src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            alt=""
          />
        </div>
        <div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/templates">
              SOCIAL TRENDS
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/templates">
              BUSINESS
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/templates">
              PROMO
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/templates">
              CELEBRATION
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/templates">
              PERSONAL
            </Link>
          </div>
        </div>
        <div>
          <div>
            <img src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfth/07f6462c449019e5800f103859423153/VideoResume.jpg?w=525&h=295&q=50&fm=webp" />
            <p>VIDEO RESUME</p>
            <button>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to="/template"
              >
                USE THIS TEMPLATE
              </Link>
            </button>
          </div>
          <div>
            <img src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfti/5e88b8d9d908427f1b450d5b539be1db/self_introduction.jpg?w=525&h=295&q=50&fm=webp" />
            <p>SELF INTRODUCTION</p>
            <button>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to="/template"
              >
                USE THIS TEMPLATE
              </Link>
            </button>
          </div>
          <div>
            <img src="https://images.ctfassets.net/00i767ygo3tc/737fg1qyv2EqV06YLUSfio/a9b5a5a639a937d63684fbd3904c8894/EducationalPresentation-min.jpg?w=525&h=295&q=50&fm=webp" />
            <p>EDUCATION PRESENTATION</p>
            <button>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to="/template"
              >
                USE THIS TEMPLATE
              </Link>
            </button>
          </div>
        </div>
        <div>
          <Link
            style={{
              fontSize: "16px",
              letterSpacing: "0.1rem",
              fontWeight: "bold",
            }}
            to="/templates"
          >
            SEE ALL TEMPLATES
          </Link>
        </div>
      </div>
      {/* 3rd section end */}

      {/* 4th section start */}
      <div className={styles.fourthsection}>
        <div>
          <p>Everything you need to create stunning videos</p>
          <img
            src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg"
            alt=""
          />
        </div>
        <div>
          <div className={styles.subfourth}>
            <div>
              <p>Stock images and music at your fingertips</p>
            </div>
            <div>
              <p>
                Save time and money tracking down stock media with our built-in
                library of millions of photos, video clips, and graphics from
                Getty Images. Set the mood with one of 3,000+ licensed songs.
              </p>
            </div>
            <div>
              <button>GET STARTED FREE</button>
            </div>
          </div>
          <div>
            <video className={styles.videoSub} controls>
              <source src="https://d2of6bhnpl91ni.cloudfront.net/cms/12-2020_StockGraphic_Homepage_A3_ForAnimation%20(1)-50f8e6b637.mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* 4th section end */}

      {/* 5th section start */}
      <div className={styles.fifth}>
        <div>
          <video className={styles.videoSub} controls>
            <source src="https://d2of6bhnpl91ni.cloudfront.net/cms/easily%20customize%20your%20videos-5cb98c4715.mp4" />
          </video>
        </div>
        <div>
          <div className={styles.title}>
            <p>
              Easy customization <br />
              tools
            </p>
          </div>
          <div>
            <p className={styles.desc}>
              Make each video your own with intuitive color, font, and design
              tools. Add your logo as a watermark to build brand awareness.
            </p>
          </div>
          <div>
            <button className={styles.subbutton}>GET STARTED FREE</button>
          </div>
        </div>
      </div>
      {/* 4th section end */}
      {/* 5th section start */}
      <div className={styles.fifth}>
        <div>
          <div className={styles.title}>
            <p>
              Unlimited video <br />
              creation
            </p>
          </div>
          <div>
            <p className={styles.desc}>
              Create square, landscape, and vertical videos to share to social
              media and beyond. There are no creation limits on any Animoto
              plan.
            </p>
          </div>
          <div>
            <button className={styles.subbutton}>GET STARTED FREE</button>
          </div>
        </div>
        <div>
          <video className={styles.videoSub} controls>
            <source src="https://d2of6bhnpl91ni.cloudfront.net/cms/create-unlimited-videos-37b27ee358.mp4" />
          </video>
        </div>
      </div>
      {/* 5th section end */}
      {/* 6th section start */}
      <div className={styles.fifth}>
        <div>
          <video className={styles.videoSub} controls>
            <source src="https://d2of6bhnpl91ni.cloudfront.net/cms/2022-06_CommentingLP-Graphic1-8bad680eab.mp4" />
          </video>
        </div>
        <div>
          <div className={styles.title}>
            <p>
              Take the stress out of
              <br /> video feedback
            </p>
          </div>
          <div>
            <p className={styles.desc}>
              No more juggling messy email threads and contradictory comments.
              Invite anyone to add time-stamped comments to your video. Reply
              and implement feedback right from your video editing workspace.
            </p>
          </div>
          <div>
            <button className={styles.subbutton}>LEARN MORE</button>
          </div>
        </div>
      </div>
      {/* 6th section end */}

      {/* 7th section start*/}
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
      {/*7th section end */}
    </div>
  );
};

export default Homepage;
