
import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 10 }) => {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="star-rating">
      {'★'.repeat(fullStars)}
      {halfStar === 1 && '☆'}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

export default StarRating;
