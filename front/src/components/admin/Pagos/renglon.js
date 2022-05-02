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
import {
  CModal,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import http from "../Imagen/http-common";
import { useState, useEffect } from "react";
import PagosService from "../../../services/Pagos.service";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProductoService from "../../../services/Producto.service";
import TablaPagos from "./tablaPagos";
import ReactDOM from "react-dom";
import Swal from "sweetalert2/dist/sweetalert2.js"

const RenglonPago = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    Nombres: "",
    Apellidos: "",
    cantidad: "",
    Productos: [],
  });
  const [producto, setProductos] = useState();
  const [visible, setVisible] = useState(false);

  const visibleCheck = (valor) => {
    loadPago();
    setVisible(valor);
    document.getElementById("root").style.filter = "blur(1px)";
    if (valor == false) {
      document.getElementById("root").style.filter = "blur(0px)";
    }
  };

  useEffect(() => {
    loadPago();
  }, []);

  const eliminarPago = (id) => {
    Swal.fire({
      icon: "warning",
      title: "¿Estas seguro de eliminar el pago?",

      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        PagosService.remove(id)
          .then((response) => {})
          .catch((e) => {
            console.log(e);
          });

        regresar();
      }
    });
  };

  const regresar = () => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    ReactDOM.render(<TablaPagos />, divDash);
  };

  const loadPago = async () => {
    setLoading(true);
    try {
      const results = await PagosService.getID(id);
      results.Productos.map((producto, index) => {
        ProductoService.getID(producto[0]).then((data) => {
          document.getElementById(
            `name${producto[0]}`
          ).innerHTML = `${data.Nombre} x ${producto[1]}`;
          http.get("/s3url2/" + data.Imagenes[0]).then((dataImagen) => {
            document.getElementById(`imagen${producto[0]}`).src =
              dataImagen.data;
          });
        });
      });

      setState(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TableRow
        key={`${id}record`}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell component="th" scope="row">
          {state.Nombres}
        </TableCell>
        <TableCell component="th" scope="row">
          {state.Apellidos}
        </TableCell>
        <TableCell component="th" scope="row">
          ${state.cantidad}
        </TableCell>
        <TableCell component="th" scope="row">
          <IconButton aria-label="ver" onClick={() => visibleCheck(!visible)}>
            <VisibilityIcon />
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <IconButton
            aria-label="delete"
            onClick={() => eliminarPago(id)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <CModal scrollable visible={visible} onClose={() => visibleCheck(false)}>
        <CModalHeader>
          <CModalTitle>Detalles de la compra</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <p>Cliente</p>
                  </TableCell>
                  <TableCell>
                    <p>
                      {state.Nombres} {state.Apellidos}
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Telefono</p>
                  </TableCell>
                  <TableCell>
                    <p>{state.Telefono}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Gastado</p>
                  </TableCell>
                  <TableCell>
                    <p>{state.cantidad}</p>
                  </TableCell>
                </TableRow>
                {state.Productos &&
                  state.Productos.map((item, index) => {
                    return (
                      <TableRow>
                        <TableCell id={`name${item[0]}`}>{item[0]}</TableCell>
                        <TableCell>
                          <img
                            id={`imagen${item[0]}`}
                            src="https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"
                            width={"90px"}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}

                <TableRow>
                  <TableCell>
                    <p>Calle</p>
                  </TableCell>
                  <TableCell>
                    <p>{state.Calle}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Colonia</p>
                  </TableCell>
                  <TableCell>
                    <p>{state.Colonia}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Ciudad</p>
                  </TableCell>
                  <TableCell>
                    <p>{state.Ciudad}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Estado</p>
                  </TableCell>
                  <TableCell>
                    <p>{state.Estado}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Indicaciones</p>
                  </TableCell>
                  <TableCell>
                    <p>{state.Indicacion}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <p>Pais</p>
                  </TableCell>
                  <TableCell>{state.Pais}</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </CModalBody>
      </CModal>
    </>
  );
};
export default RenglonPago;
