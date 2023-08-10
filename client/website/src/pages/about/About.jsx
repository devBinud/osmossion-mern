import React from "react";
import "./About.css";
import mission from "../../assets/about/mission.jpg";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import about__img from "../../assets/about/about__img.jpg"
;
const About = () => {
  return (
    <>
      <div className="about">
        <Breadcrumbs title="About Us" componentName="About Us" />
        <div className="container">
          <div className="about__wrapper pt-lg-5 pb-lg-5">
            <div className="row gy-4 align-items-center about-item">
              <div
                className="col-lg-7 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="about__right__small">Welcome to Our Website</p>
                <h3 className="about__page__heading">
                  Empowering Rural India  with Life Saving Hemodialysis Services
                </h3>
                <p>
                  we believe that quality dialysis care should be accessible to
                  everyone. That's why we work closely with insurance providers
                  and offer flexible payment options to ensure that our services
                  are affordable and accessible to all patients. We're also
                  committed to staying up-to-date with the latest advances in
                  kidney disease treatment, and we continually invest in
                  training and technology to provide the best possible care to
                  our patients.
                </p>
              </div>
              <div
                className="col-lg-5 order-1 order-lg-2 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <div className="upper__about__img">
                  <img src={about__img} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our__vision__and__mission">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6 ms-1 order-2">
                <div className="our__vision__left__content">
                <p className="about__right__small">Inspiring a brighter tomorrow</p>
                  <h3>Our Mission and Vision </h3>
                  <p>
                    <strong style={{color:'rgb(47 89 159)'}}>Bringing affordable and accessible hemodialysis services to rural India, ensuring no one dies due to lack of access to life-saving dialysis. </strong>
                    In the vast expanse of rural India, countless individuals
                    face the daunting challenge of kidney failure. We have
                    witnessed the struggles, the pain, and the lack of
                    accessible healthcare options. It is this understanding that
                    fuels our determination to bridge the gap and bring hope to
                    the underserved communities. With unwavering focus, we are
                    building a network of hemodialysis centers that cater
                    specifically to these neglected areas. We firmly believe
                    that every person, regardless of their background or
                    location, deserves the chance to receive affordable and
                    high-quality dialysis therapy. By extending our services to
                    the farthest corners, we strive to transform lives impacted
                    by kidney failure.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="our__vision__img">
                  <img src={mission} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__contents container">
               <h4>About Company</h4>
               <p> Our startup is focused on addressing the critical issue of kidney failure in rural India by offering affordable and accessible hemodialysis services. Kidney failure is a life-threatening condition that affects a significant portion of the population, leading to high mortality rates due to the lack of awareness, limited access to nephrology services, and the high cost of dialysis treatments. We aim to establish hemodialysis centers in small towns, bringing the therapy closer to patients and eliminating the need for long-distance travel. By providing world-class quality dialysis at affordable prices, we strive to ensure that no one dies without access to dialysis.</p>
               <h4>Our Compassionate Team</h4>
               <p>
               Our team is comprised of compassionate healthcare professionals who have dedicated their lives to making a difference. We have witnessed firsthand the profound impact of timely and effective treatments for individuals with kidney failure. With tireless dedication, we work day and night to ensure that no life is lost due to lack of access to dialysis.
               </p>
               <h4>
               Addressing Critical Challenges
               </h4>
               <p>
               One of the critical challenges we address is the dire lack of accessibility to hemodialysis services in rural India. Kidney failure is a silent threat that ravages a significant portion of the population. The lack of awareness, limited access to nephrology services, and the exorbitant cost of dialysis treatments contribute to devastatingly high mortality rates. Our startup was born from a vision to change this reality, to establish hemodialysis centers in small towns, eradicating the need for long and arduous journeys in search of treatment. We aim to bring the therapy closer to the very hearts and souls of the patients who need it most.
               </p>
               <h4>
               World-Class Dialysis at Affordable Prices
               </h4>
               <p>
               We are unwavering in our commitment to provide world-class dialysis of the highest quality, all at affordable prices. Our deepest desire is to ensure that no precious life is lost due to the unavailability of dialysis services. By offering accessible treatments, we hope to empower individuals with kidney failure and provide them with the chance to experience healthier and more fulfilling lives.
               </p>
               <h4>
               Empowering through Education
               </h4>
               <p>
               Beyond our hemodialysis services, we place a strong emphasis on kidney health education. We firmly believe that knowledge is power when it comes to preventing kidney failure and managing the condition effectively. Through our educational initiatives, we strive to raise awareness, promote early detection, and equip individuals and communities with invaluable information.
               </p>
               <h4>
               Conclusion
               </h4>
                <p>
                Thank you for gracing our website with your presence. We warmly invite you to explore more about our services, our compassionate team, and the initiatives we passionately undertake. Together, let us forge a path of hope, let us make a resounding impact on healthcare outcomes, and let us save lives in the beautiful and deserving rural corners of India.
                </p>

                <h4 className="mb-4">Some Frequently Asked Questions </h4>
            <h5>
           1. How can I access your hemodialysis services?
            </h5>
            <p>
            To access our hemodialysis services, you can visit our website and find the contact information for our centers nearest to your location. Alternatively, you can reach out to our customer support team, and they will guide you through the process.
            </p>
            <h5>
             2. Are your dialysis treatments covered by insurance?
            </h5>
            <p>
            We work with various insurance providers to ensure that our dialysis treatments are covered. However, coverage may vary depending on your insurance plan. We recommend contacting your insurance provider directly to inquire about the extent of coverage for our services.
            </p>
            <h5>
           3. What makes your dialysis centers different from others?
            </h5>
            <p>
            Our dialysis centers are specifically designed to cater to the needs of rural communities. We understand the challenges faced by individuals in these areas and have tailored our services accordingly. Our focus on affordability, accessibility, and quality sets us apart and ensures that we make a meaningful impact on the lives of our patients.
            </p>
            <h5>
           4. How can I contribute to your mission?
            </h5>
            <p>
            You can contribute to our mission by spreading awareness about kidney health and the importance of early detection. Additionally, you can consider making a donation or exploring volunteer opportunities with our organization. Together, we can work towards saving more lives and improving healthcare outcomes.
            </p>
            <h5>
           5. Can I refer someone to your services?
            </h5>
            <p>
            Yes, we encourage referrals. If you know someone in rural India who requires hemodialysis services, please reach out to us with their contact information, and we will take it from there. Your referral could make a life-changing difference for someone in need.
            </p>
            </div>
      </div>
    </>
  );
};

export default About;
