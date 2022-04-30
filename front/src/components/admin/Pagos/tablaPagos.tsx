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
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Swal from "sweetalert2/dist/sweetalert2.js"
import PagosService from "../../../services/Pagos.service";

const TablaPagos = () => {
  
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pagos, setPagos] = useState([]);
  useEffect(() => {
    loadPagos();
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

  const loadPagos = async () => {
    setLoading(true);
    try {
      const results = await PagosService.getAllPaid();
      console.log(results.data);
      setPagos(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Pagos</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              {loading && <CircularProgress />}

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Cliente</TableCell>
                      <TableCell>Producto</TableCell>
                      <TableCell>Precio</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pagos.map((pago, index) => (
                      <TableRow
                        key={`${pago._id}${index}record`}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {pago.Nombres}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {pago.NombreProducto}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          ${pago.cantidad}
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
export default TablaPagos;
