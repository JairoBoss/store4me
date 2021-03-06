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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import CategoriaService from "../../../services/Categoria.service";
import EditarCategoria from "./editar";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Swal from 'sweetalert2'
import CrearCategoria from "./crear";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const TablaCategorias = () => {
  require("./estilos.css")
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
      // console.log(results.data);
      setCategorias(results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const editarCategoria = (id) => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    ReactDOM.render(<EditarCategoria id={id} />, divDash);
  };
  
  
  const eliminarCategoria = (id) => {
    Swal.fire({
      icon: "warning",
      title: "??Estas seguro de eliminar la categoria?",
      
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        CategoriaService.remove(id)
          .then((response) => {})
          .catch((e) => {
            console.log(e);
          });

        regresar();
      }
    });
  };

  const crearCategoria = () =>{
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    ReactDOM.render(<CrearCategoria />, divDash);
    // ReactDOM.render(<CrearProducto />, divDash);
    
  }

  const regresar = () => {
    let divDash = document.getElementById("contenidoDash");
    if (divDash.children.length > 0) {
      ReactDOM.unmountComponentAtNode(divDash);
    }
    ReactDOM.render(<TablaCategorias />, divDash);
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Categorias</h6>            
            <Button color="secondary" variant="outlined"  onClick={() => crearCategoria()}>Crear categorias</Button>
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
                      <TableCell></TableCell>
                      <TableCell></TableCell>                      
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
                          <IconButton aria-label="delete"  onClick={() => editarCategoria(categoria._id)}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">                          
                          <IconButton aria-label="delete"  onClick={() => eliminarCategoria(categoria._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                component="div"
                count={total}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={limit}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </div>
          </div>
        </div>
      </div>            
    </div>
  );
};
export default TablaCategorias;
