import React from 'react';

export default function PaginationDots({ currentIndex, totalSlides, onDotClick, onPrev, onNext }) {
  return (
    <div className="pagination modal-4">
      <h5 className="prev" onClick={onPrev}>上一頁</h5>
      {[...Array(totalSlides)].map((_, index) => (
        <h5
          key={index}
          className={index === currentIndex ? 'activeDot' : ''}
          onClick={() => onDotClick(index)}
        >
          {index + 1}
        </h5>
      ))}
      <h5 className="next" onClick={onNext}>下一頁</h5>
    </div>
  );
}
