import React from "react";
import styles from "./styles.module.css";
import Product from "./Product";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_container}>
        <img
          className={styles.home_image}
          src="https://m.media-amazon.com/images/I/71q9RaZCDYL._SX3000_.jpg"
          alt="Home page banner"
        />
        <div className={styles.home_row}>
          <Product
            title="2 States"
            price={299}
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzOWRanGwwH8B3hq_DvRYgz9hHb_N5ktshjs6KvcdatFhILMe6"
            rating={5}
          />
          <Product
            title="ONE NIGHT @ THE CALL CENTER"
            price={185}
            image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMKry6GcKCSzuZ-nqprN_chDChaY8NWfXbqsFoAmAbudj7gqLH"
            rating={4}
          />
        </div>
        <div className={styles.home_row}>
          <Product
            title="Apple iPhone 14 Pro Max (128 GB) - Deep Purple"
            price={127999}
            image="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UF1000,1000_QL80_.jpg"
            rating={5}
          />
          <Product
            title="Apple 2023 MacBook Air Laptop with M2 chip: 38.91 cm (15.3-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage"
            price={134999}
            image="https://m.media-amazon.com/images/I/71S4sIPFvBL._AC_UF1000,1000_QL80_.jpg"
            rating={4}
          />
          <Product
            title="True Elements Chia Seeds 500gm - Raw Chia Seeds"
            price={479}
            image="https://m.media-amazon.com/images/I/71vbQzDkQbL.jpg"
            rating={5}
          />
        </div>
        <div className={styles.home_row}>
          <Product
            title="Butterfly Premium Vegetable Chopper 900 Ml, Blue"
            price={366}
            image="https://5.imimg.com/data5/SELLER/Default/2023/3/296653052/JU/CW/SZ/2529238/butterfly-premium-vegetable-chopper-900-ml.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
