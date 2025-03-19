import React, { useEffect, useState } from "react";

const InfiniteScrollPractice = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const contentScroll =
      window.innerHeight + document.documentElement.scrollTop;
    const totalHeight = document.documentElement.offsetHeight;

    console.log(loading, "loading");

    if (contentScroll >= totalHeight - 100 && !loading) {
      getData();
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getData = () => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      {data.map((img) => {
        return <img src={img.download_url} alt="img" width="500px" />;
      })}
    </div>
  );
};

export default InfiniteScrollPractice;
