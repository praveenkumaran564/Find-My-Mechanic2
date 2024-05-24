import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="inside">
        <div>
          <div>
            <h2>Welcome</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",

              }}
            >
              <div class="product-list-container">
                <div class="product-card" style={{ width: "300px" }}>
                  <img src="./product-1.jpg" alt="Product Name" />
                  <h3 class="product-title">Svg pit shop</h3>
                  <p class="product-description">2wheeler&4wheeler</p>
                  <p class="product-price">saravanampatti</p>
                  <button>more deatails</button>
                </div>
              </div>

              <div class="product-list-container">
                <div class="product-card" style={{ width: "300px" }}>
                  <img src="./product-1.jpg" alt="Product Name" />
                  <h3 class="product-title">Svg pit shop</h3>
                  <p class="product-description">2wheeler&4wheeler</p>
                  <p class="product-price">saravanampatti</p>
                  <button>more deatails</button>
                </div>
              </div>

              <div class="product-list-container">
                <div class="product-card" style={{ width: "300px" }}>
                  <img src="./product-1.jpg" alt="Product Name" />
                  <h3 class="product-title">Svg pit shop</h3>
                  <p class="product-description">2wheeler&4wheeler</p>
                  <p class="product-price">saravanampatti</p>
                  <button>more deatails</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
