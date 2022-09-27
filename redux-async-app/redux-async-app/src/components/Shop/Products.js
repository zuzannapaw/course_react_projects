import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    title: "Book",
    price: 7,
    id: "i1",
    description: "Bestseller fantasy book about trolls!",
  },
  {
    title: "Hand Cream",
    price: 2,
    id: "i2",
    description: "Smooth hands from your dreams",
  },
  {
    title: "Slippers",
    price: 10,
    id: "i3",
    description: "Best feeling for your tired feet",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
