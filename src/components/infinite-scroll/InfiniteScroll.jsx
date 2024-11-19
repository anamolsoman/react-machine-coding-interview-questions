import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
      .then((res) => res.json())
      .then((data) => setData((prevData) => [...prevData, ...data]));
  }, [page]);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(target);
          setPage((page) => page + 1);
        }
      },
      { threshold: 0.5 }
    );
    let target = document.querySelector(".item-image:last-child");

    console.log(target, "target");
    if (target) {
      observer.observe(target);
    }
  }, [data]);

  return (
    <div className="">
      {data?.map((item, index) => {
        return (
          <img
            alt="item"
            key={index}
            src={item.download_url}
            className="h-[300px] w-[200px] m-2 item-image"
          />
        );
      })}
    </div>
  );
}

export default InfiniteScroll;
