import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import CategoriaService from "../../../services/Categoria.service";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Swal from "sweetalert2/dist/sweetalert2.js"
import ProductoService from "../../../services/Producto.service";
import CrearProducto from "./crearProducto";
import SimpleDropZone from "../Imagen/imagen"
import EditarProducto from "./editarProducto";

const TablaProductos = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    loadProducto();
  }, []);
  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const loadProducto = async () => {
    setLoading(true);
    try {
      const results = await ProductoService.getAll();
      setProductos(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const editarProducto = (id) => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    // ReactDOM.render(<EditarCategoria id={id} />, divDash);
    ReactDOM.render(<EditarProducto id={id}/>, divDash);
  };

  const eliminarCategoria = (id) => {
    Swal.fire({
      icon: "warning",
      title: "¿Estas seguro de eliminar la categoria?",

      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        ProductoService.remove(id)
          .then((response) => {})
          .catch((e) => {
            console.log(e);
          });

        regresar();
      }
    });
  };

  const crearProducto = () => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    ReactDOM.render(<CrearProducto/>, divDash);
  };

  const regresar = () => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    // ReactDOM.render(<TablaCategorias />, divDash);
    ReactDOM.render(<></>, divDash);
  };
  
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Productos</h6>
            <button onClick={() => crearProducto()}>Crear producto</button>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              {loading && <CircularProgress />}              
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Descripcion</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell>Stock</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productos.map((producto, index) => (
                      <TableRow
                        key={`${producto._id}${index}record`}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {producto.Nombre}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {producto.Descripcion}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          ${producto.Precio}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {producto.Stock}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <button
                            onClick={() => editarProducto(producto._id)}
                          >
                            Editar
                          </button>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <button
                            onClick={() => eliminarCategoria(producto._id)}
                          >
                            Eliminar
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                component="div"
                count={total}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={limit}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TablaProductos;
