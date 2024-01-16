import { useState } from 'react';

const SearchSlider = ({ isOpen, setIsOpen }) => {
  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleSlider} className="closeButton">
        Close Slider
      </button>
      <h2>this is the slider</h2>
    </div>
  );
};

export default SearchSlider;
