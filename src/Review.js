import React, { useState } from "react";
import dogs from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, breed, image, text } = dogs[index];

  const checkNum = (num) => {
    if (num > dogs.length - 1) {
      return 0;
    }
    if (num < 0) {
      return dogs.length - 1;
    }
    return num;
  };

  const nextDog = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };
  const prevDog = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };
  const randomDog = () => {
    let randomNum = Math.floor(Math.random() * dogs.length);
    if (randomNum === index) {
      randomNum = randomNum + 1;
    }
    setIndex(checkNum(randomNum));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="dog-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="breed">{breed}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevDog}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextDog}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomDog}>
        Random Review
      </button>
    </article>
  );
};

export default Review;
