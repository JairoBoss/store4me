import {
  AppBar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import CategoriaService from "../../../services/Categoria.service";
import { MDBDataTable } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";

const TablaCategorias = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);

  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    loadCategorias();
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

  const loadCategorias = async () => {
    setLoading(true);
    try {
      const results = await CategoriaService.getAll();
      console.log(results.data);
      setCategorias(results);
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
            <h6>Projects table</h6>
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
                      <TableCell>Editar</TableCell>
                      <TableCell>Eliminar</TableCell>
                      <TableCell>Ver</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categorias.map((categoria, index) => (
                      <TableRow
                        key={`${categoria._id}${index}record`}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {categoria.Nombre}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {categoria.Descripcion}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {categoria.Nombre}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {categoria.Nombre}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {categoria.Nombre}
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
export default TablaCategorias;
