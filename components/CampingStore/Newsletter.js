/**
 **
 */
import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest camping gear and exclusive offers!</p>
      <form className="newsletter-form">
        <label htmlFor="email-input" className="visually-hidden">
          Email address 
        </label>
        <input
          type="email"
          id="email-input"
          className="newsletter-input"
          placeholder="Enter your email address"
          required
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
      <style jsx>{`
        .newsletter {
  background-color: #f0f0f0;
  padding: 40px;
  text-align: center;
  margin-top: 40px;
}

.newsletter h2 {
  margin-top: 0;
}

.newsletter-form {
  display: flex;
  max-width: 1080px;
  margin: 20px auto 0;
}

.newsletter-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.newsletter-button {
  background-color: var(--secondary-color);
  color: var(--white);
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}
      `}</style>
    </section>
  );
};

export default Newsletter;


