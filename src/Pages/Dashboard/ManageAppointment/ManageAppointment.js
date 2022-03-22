//imported file
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/system";
import * as React from "react";
import useAuth from "../../../hooks/useAuth";

//MyOrders component
const ManageAppointment = () => {
  //destructuring data from useAuth
  const { dataContext } = useAuth();

  const { deleteAppointment, appointmentsData } = dataContext;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //filtering my orders data
  console.log(appointmentsData);

  const rows = appointmentsData;
  return (
    <Box style={{ marginTop: "30px" }}>
      <Paper
        className="container"
        sx={{ maxWidth: "85vw", overflow: "hidden" }}
      >
        <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
          <Table
            sx={{ overflowX: "auto" }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Appointment By</TableCell>
                <TableCell>Doctor Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({ _id, name, email, status, cell, date, doctor }) => {
                  console.log(name);
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                      <TableCell>
                        <strong> Name:</strong> {name} <br />
                        <strong> Email: </strong> {email} <br />
                        <strong> Cell: </strong> {cell}
                      </TableCell>
                      <TableCell>{doctor}</TableCell>

                      <TableCell align="left">{date}</TableCell>
                      <TableCell align="left">{status}</TableCell>
                      <TableCell align="left">
                        <Tooltip title="Cancel" arrow>
                          <IconButton onClick={() => deleteAppointment(_id)}>
                            <CancelIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ManageAppointment;
