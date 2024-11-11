import "./StarRating.css";
import { useState, useEffect } from "react";
function Star({ onMouseEnter, onMouseLeave, onClick, rating, starId }) {
  return (
    <>
      <svg
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className="star-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="200px"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-10 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          fill={starId <= rating ? "yellow" : "white"}
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>

      {/* <svg
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className="star-icon"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_215_5104"
          maskUnits="userSpaceOnUse"
          x="3"
          y="26"
          width="25"
          height="2"
        >
          <rect x="3" y="26" width="25" height="2" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_215_5104)">
          <path
            opacity="0.2"
            d="M16.7127 26.4874L26.8377 16.3624C29.3252 13.8624 29.6877 9.77493 27.3377 7.16243C26.7483 6.50407 26.0309 5.97278 25.2293 5.60103C24.4277 5.22929 23.5587 5.02488 22.6754 5.00032C21.7921 4.97575 20.9131 5.13153 20.0921 5.45814C19.271 5.78476 18.5252 6.27534 17.9002 6.89993L16.0002 8.81243L14.3627 7.16243C11.8627 4.67493 7.77517 4.31243 5.16267 6.66243C4.50431 7.25179 3.97302 7.96919 3.60128 8.7708C3.22953 9.57242 3.02513 10.4414 3.00056 11.3247C2.97599 12.208 3.13177 13.087 3.45839 13.908C3.785 14.7291 4.27559 15.4749 4.90017 16.0999L15.2877 26.4874C15.4773 26.6752 15.7333 26.7806 16.0002 26.7806C16.267 26.7806 16.5231 26.6752 16.7127 26.4874Z"
            fill="#F23B5C"
          />
        </g>
        <path
          d="M16.7124 26.4874L26.8374 16.3624C29.3249 13.8624 29.6874 9.77493 27.3374 7.16243C26.7481 6.50407 26.0307 5.97278 25.2291 5.60103C24.4274 5.22929 23.5584 5.02488 22.6752 5.00032C21.7919 4.97575 20.9129 5.13153 20.0918 5.45814C19.2708 5.78476 18.525 6.27534 17.8999 6.89993L15.9999 8.81243L14.3624 7.16243C11.8624 4.67493 7.77493 4.31243 5.16243 6.66243C4.50407 7.25179 3.97278 7.96919 3.60103 8.7708C3.22929 9.57242 3.02488 10.4414 3.00032 11.3247C2.97575 12.208 3.13153 13.087 3.45814 13.908C3.78476 14.7291 4.27534 15.4749 4.89993 16.0999L15.2874 26.4874C15.477 26.6752 15.7331 26.7806 15.9999 26.7806C16.2668 26.7806 16.5228 26.6752 16.7124 26.4874V26.4874Z"
          stroke="black"
          fill={starId <= rating ? "red" : "white"}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
    </>
  );
}

function StarRating() {
  let stars = [1, 2, 3, 4, 5];
  let [rating, setRating] = useState(0);
  let [hoverState, setHoverState] = useState(0);

  useEffect(() => {
    console.log("hover state = ", hoverState, "rating =", rating);
  }, [hoverState, rating]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      Rating is {rating + 1}/5
      <div className="flex">
        {stars.map((star, i) => {
          return (
            <Star
              rating={hoverState || rating}
              onMouseEnter={() => setHoverState(i)}
              onMouseLeave={() => setHoverState(0)}
              onClick={() => setRating(i)}
              key={i}
              starId={i}
            />
          );
        })}
      </div>
      {/* <div class="custom-tooltip" title="This is a custom tooltip">
        Hover over me
      </div> */}
    </div>
  );
}
export default StarRating;
