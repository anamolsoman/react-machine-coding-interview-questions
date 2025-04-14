import { useEffect, useState } from "react";
// import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const getAllProducts = async () => {
      await fetch(`https://dummyjson.com/products?limit=${limit}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setTotalProducts(data.total);
          console.log(data);
        });
    };
    getAllProducts();
  }, [limit]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        if (products.length <= totalProducts) {
          setLimit((limit) => limit + 10);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      {products &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <div className="min-h-[100px]">
                <h2>
                  {product.title} - ${product.price}
                </h2>
                <p>{product.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
