import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { Producto } from "../../../models/Producto";
import ProductoService from "../../../services/Producto.service";
// import "./index.css";
import ItemProducto from "./itemProducto";

const ListaProductos = () => {
  require('./index.css');
  const [state, setState] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  let x = null;
  useEffect(() => {
    loadProducto();
    x = <ItemProducto id={"6258f907cb6c2f3c55c3aac0"} />;
  }, []);

  const loadProducto = async () => {
    setLoading(true);
    try {
      const results = await ProductoService.getAll();
      setState(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="navbar1">
          <div className="logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" width="125px" />
            </a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="products.html">Products</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="account.html">Account</a>
              </li>
            </ul>
          </nav>
          <a href="cart.html">
            <img src="images/cart.png" width="30px" height="30px" />
          </a>
          <img src="images/menu.png" className="menu-icon" />
        </div>
      </div>
      {/* All Products */}
      <div className="small-container">
        <div className="row row-2">
          <h2>Todos los productos</h2>
          <select>
            <option>Default Sort</option>
            <option>Sort By Price</option>
            <option>Sort By Popularity</option>
            <option>Sort By Rating</option>
            <option>Sort By Sale</option>
          </select>
        </div>
        <div className="row">
          {loading ? (
            <CircularProgress />
          ) : (
            state.map((producto, index) => {
              
              return (
                <ItemProducto key={index} id={producto._id}/>
                // null
              );
            })
          )}
          {console.log(typeof state)}
          {console.log(state)}
          {state.map((producto, index) => {
            console.log(producto._id);
            return (
              // <ItemProducto id={"625a4ba26e53882fd1b05a55"}/>
              null
            );
          })}
</div>
        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>→</span>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <div className="app-logo">
                <img src="images/play-store.png" />
                <img src="images/app-store.png" />
              </div>
            </div>
            <div className="footer-col-2">
              <img src="images/logo-white.png" />
              <p>
                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow Us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2020 - Samwit Adhikary</p>
        </div>
      </div>
      {/* javascript */}
    </>
  );
};
export default ListaProductos;
