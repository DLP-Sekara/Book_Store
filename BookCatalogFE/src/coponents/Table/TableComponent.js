import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, id, author, price, action) {
  return { name, id, author, price, action };
}
const rows = [
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    24,
    <>
      <button Style="background-color: orange; border:1px solid orange;border-radius:3px;margin-right:10px;cursor: pointer;">
        Edit
      </button>
      <button Style="background-color: red;color:white; border:1px solid red;border-radius:3px;cursor: pointer;">
        Delete
      </button>
    </>
  ),

  createData(
    "Frozen yoghurt",
    159,
    6.0,
    24,
    <>
      <button Style="background-color: orange; border:1px solid orange;border-radius:3px;margin-right:10px;cursor: pointer;">
        Edit
      </button>
      <button Style="background-color: red;color:white; border:1px solid red;border-radius:3px;cursor: pointer;">
        Delete
      </button>
    </>
  ),

  createData(
    "Frozen yoghurt",
    159,
    6.0,
    24,
    <>
      <button Style="background-color: orange; border:1px solid orange;border-radius:3px;margin-right:10px;cursor: pointer;">
        Edit
      </button>
      <button Style="background-color: red;color:white; border:1px solid red;border-radius:3px;cursor: pointer;">
        Delete
      </button>
    </>
  ),
];

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>Book Name</StyledTableCell>
        <StyledTableCell>Book ID</StyledTableCell>
        <StyledTableCell>Book Author</StyledTableCell>
        <StyledTableCell>Book Price</StyledTableCell>
        <StyledTableCell>Action</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

function TableBodyComponent() {
  return (
    <TableBody>
      {rows.map((row) => (
        <StyledTableRow key={row.name}>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell>{row.id}</StyledTableCell>
          <StyledTableCell>{row.author}</StyledTableCell>
          <StyledTableCell>{row.price}</StyledTableCell>
          <StyledTableCell>{row.action}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
}

function TableComponent() {
  return (
    <div
      style={{
        height: "300px",
        border: "1px solid rgb(190, 190, 190);",
        overflow: "auto",
        maxWidth: "100%",
      }}
    >
      <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
        <Table sx={{ minWidth: 850 }} aria-label="customized table">
          <TableHeader />
          <TableBodyComponent />
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;
