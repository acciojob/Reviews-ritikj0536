import React from "react";
import { useState } from "react";
import reviews from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);

  // Destructure current review
  const { id, name, job, image, text } = reviews[index];

  // Previous review
  const prevReview = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };

  // Next review
  const nextReview = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  // Random review
  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    if (randomIndex === index) {
      randomIndex = (index + 1) % reviews.length;
    }

    setIndex(randomIndex);
  };

  return (
    <article className="review">
      <img src={image} alt={name} className="person-img" />

      <h4 id={`author-${id}`} className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>previous </button>
        <button className="next-btn" onClick={nextReview}>next</button>
      </div>
      <button className="random-btn" onClick={randomReview}>surprise me</button>
    </article>
  );
};

export default Review;
