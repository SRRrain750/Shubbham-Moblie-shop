import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ initialRating = 0, initialCount = 0}) => {
  const [rating, setRating] = useState(initialRating);
  const [count, setCount] = useState(initialCount);

  const handleStarClick = (value) => {
    setRating(value);
    setCount(count + 1); // increase ratings count on click
  };

  return (
    <div>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={18}
            onClick={() => handleStarClick(star)}
            className={`cursor-pointer ${
              rating >= star ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Rating Display */}
      <div className="text-sm mt-1 font-medium">
        {rating.toFixed(1)} ★ | {count} ratings
      </div>
    </div>
  );
};

export default StarRating;
