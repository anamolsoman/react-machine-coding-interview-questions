import React, { useState } from "react";
import CarouselImg1 from "./song.png";

const CarouselImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQE9Fnz2sPJ1YwC6ILqvfO7nBXrBnjT9pr2A&s";
// const images = [
//   {
//     src: "https://picsum.photos/id/600/600/400",
//     alt: "Forest",
//   },
//   {
//     src: "https://picsum.photos/id/100/600/400",
//     alt: "Beach",
//   },
//   {
//     src: "https://picsum.photos/id/200/600/400",
//     alt: "Yak",
//   },
//   {
//     src: "https://picsum.photos/id/300/600/400",
//     alt: "Hay",
//   },
//   {
//     src: "https://picsum.photos/id/400/600/400",
//     alt: "Plants",
//   },
//   {
//     src: "https://picsum.photos/id/500/600/400",
//     alt: "Building",
//   },
// ];
const cards = [
  {
    id: 1,
    image: CarouselImg,
  },
  { id: 2, image: CarouselImg1 },
  { id: 3, image: CarouselImg },
  { id: 4, image: CarouselImg1 },
  { id: 5, image: CarouselImg },
  { id: 6, image: CarouselImg1 },
  { id: 7, image: CarouselImg },
  { id: 8, image: CarouselImg1 },
  { id: 9, image: CarouselImg },
  { id: 10, image: CarouselImg },
];

function Carousel() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(visibleCards);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row ">
        {cards.map((card) => {
          return (
            endIndex >= card.id &&
            card.id >= startIndex && (
              <div className="m-2">
                <div>{card.id}</div>
                <img src={card.image} alt="song" />
              </div>
            )
          );
        })}
      </div>{" "}
      <div className="flex">
        <button
          className="m-2 border p-1 px-4 "
          disabled={startIndex === 1}
          onClick={() => {
            setEndIndex(endIndex - visibleCards);
            setStartIndex(startIndex - visibleCards);
          }}
        >
          Back
        </button>
        <button
          disabled={endIndex > cards.length - 1}
          className="m-2 border p-1 px-4 bg-blue-600 text-white"
          onClick={() => {
            setEndIndex(endIndex + visibleCards);
            setStartIndex(startIndex + visibleCards);
          }}
        >
          Next {endIndex}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
