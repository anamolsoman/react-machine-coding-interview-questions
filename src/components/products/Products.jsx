import { useEffect, useState } from "react";
import "./index.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchKey, setSearchKey] = useState("");
  const [categories, setCategories] = useState({
    BEAUTY: false,
    GROCERIES: false,
    FURNITURE: false,
    FRAGRANCES: false,
  });
  const [filters, setFilters] = useState({
    InStock: false,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    };
    fetchProducts();
  }, []);

  const sortByPrice = () => {
    const res = products.sort((a, b) => a.price - b.price);
    setProducts([...res]);
  };

  useEffect(() => {
    let res = products.filter((product) =>
      product.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredProducts([...res]);
  }, [searchKey, products]);

  const handleCategoryClick = (category) => {
    setCategories({
      ...categories,
      [category]: !categories[category],
    });
  };

  const checkIfCategorySelected = (category) => {
    console.log(categories[category]);
    if (categories[category]) {
      return category;
    }
    return false;
  };

  useEffect(() => {
    if (Object.values(categories).includes(true)) {
      let filteredRes = products.filter(
        (product) =>
          product.category.toUpperCase() ==
          checkIfCategorySelected(product.category.toUpperCase())
      );
      setFilteredProducts([...filteredRes]);
    } else {
      setFilteredProducts(products);
    }
  }, [categories]);

  return (
    <div id="products">
      <div id="sidebar">
        <div className="title">Search</div>
        <input
          className="search"
          placeholder="Search Products"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div className="title">Categories</div>
        <div>
          {Object.keys(categories).map((category) => {
            return (
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={categories[category]}
                    onChange={(e) => handleCategoryClick(category)}
                  />
                  {category}
                </label>
              </div>
            );
          })}
        </div>

        <div onClick={() => sortByPrice()}>Sort By Price</div>
      </div>
      <div id="products-listing">
        {filteredProducts.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div>{/* <img src={product.thumbnail} alt="product" /> */}</div>
              <div>{product.title}</div>
              <div className="product-info">
                <div className="price">{product.price}$</div>
                <div>
                  <button id="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
