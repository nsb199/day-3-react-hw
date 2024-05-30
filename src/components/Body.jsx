import React from 'react';
import massageTherapyImage from '../assets/massage-therapy.jpg';

const Body = () => (
  <main>
    <section className="hero">
      <img src={massageTherapyImage} alt="Massage Therapy" />
    </section>
    <section className="highlight">
      <h2>Think Health. Think Massage.</h2>
      <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
      <div className="buttons">
        <button>Learn More About Us</button>
        <button>Contact Us Today</button>
      </div>
    </section>
    <section className="description">
      <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
      <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
      <p>We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
    </section>
  </main>
);

export default Body;
