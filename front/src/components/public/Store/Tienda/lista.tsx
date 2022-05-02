import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Producto } from "../../../../models/Producto";
import ProductoService from "../../../../services/Producto.service";
import ItemProducto from "./productoItem";

const Lista = () => {
  const [state, setState] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducto();
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

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  // if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div style={{ paddingTop: "30px" }}>
      <div className="product-tab space-mb--r100">
        <div className="container">
          <div
            className="product-tab__navigation text-center justify-content-center space-mb--r60 "
            role="tablist"
          >
            <div className="nav-item">
              <a
                role="tab"
                data-rb-event-key="popular"
                aria-selected="true"
                className="nav-link active"
              >
                Popular
              </a>
            </div>
          </div>
          <div className="tab-content">
            <div
              role="tabpanel"
              aria-hidden="false"
              className="fade tab-pane active show"
            >
              <div className="space-mb--rm50 row">
                {/* Aqui van los productos */}
                {loading ? (
                  <CircularProgress />
                ) : (
                  state.map((producto, index) => {
                    return (
                      <ItemProducto key={index} id={producto._id} />                      
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lista;
