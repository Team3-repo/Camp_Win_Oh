/**
 **
 */
import React from "react";

const Newsletter = () => {
  return (
    <section>
      <form className="newsletter-form">
        <label className="visually-hidden">
        </label>
        <input
          className="newsletter-input"
          placeholder="輸入搜尋關鍵字"
        />
        <button type="submit" className="newsletter-button">
          搜尋
        </button>
      </form>
      <style jsx>{`
        .newsletter-form {
  display: flex;
  max-width: 1080px;
  margin: 20px auto 0;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.newsletter-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}
.newsletter-button {
  background: var(--BTN-CLOR, #fc9a84);
  background-color: var(--BTN-CLOR, #fc9a84);
  color: var(--white, var(--white, #fff));
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

<style jsx>{``}</style>
