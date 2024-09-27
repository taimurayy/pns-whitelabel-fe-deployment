import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PersonIcon from "@mui/icons-material/Person";
// Define the data structure for each row
interface FromData {
  name: string;
  avatar: string;
}

interface TableData {
  channel: string;
  from: FromData;
  date: string;
  message: string;
  status: string;
  dueDate: string;
  to: string;
}

interface DataTableProps {
  rows: TableData[];
}

const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5); // Default rows per page

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event);
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell sx={{ width: "1%", color: "#bcbcbc" }}>
                CHANNEL
              </TableCell>
              <TableCell sx={{ width: "1%", color: "#bcbcbc" }}>FROM</TableCell>
              <TableCell sx={{ width: "30%" }}>
                <Box display="flex">
                  <Typography sx={{ color: "#777777" }}>DATE</Typography>
                  <ArrowDownwardIcon sx={{ color: "#4c71ea" }} />
                </Box>
              </TableCell>
              <TableCell sx={{ width: "25%", color: "#bcbcbc" }}>
                MESSAGE
              </TableCell>
              <TableCell sx={{ color: "#bcbcbc" }}>STATUS</TableCell>
              <TableCell sx={{ color: "#bcbcbc" }}>DUE DATE</TableCell>
              <TableCell sx={{ color: "#bcbcbc" }}>TO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <CheckCircleIcon sx={{ color: "green" }} />
                    <StarIcon sx={{ color: "#bcbcbc" }} />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    {/* {row.channel} */}
                    <HelpOutlineIcon sx={{ color: "#bcbcbc" }} />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <Avatar
                      alt={row.from.name}
                      src={row.from.avatar}
                      sx={{ backgroundColor: "#eb5073" }}></Avatar>
                    {/* {row.from.name} */}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", color: "#bcbcbc" }}>
                    {row.date}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", color: "#777777" }}>
                    {row.message}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <Typography
                      sx={{
                        border: "2px solid #eaebee",
                        backgroundColor: "#eaebee",
                        borderRadius: 2,
                        padding: 1,
                      }}>
                      {row.status}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", color: "#bcbcbc" }}>
                    {row.dueDate}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", color: "#bcbcbc" }}>
                    {/* {row.to} */}
                    <PersonIcon sx={{ color: "#bcbcbc" }} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" p={2}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={
            <Box sx={{ display: "flex-start", alignItems: "left" }}>
              <Typography variant="body2">Rows per page:</Typography>
              {/* This selects the rows per page */}
            </Box>
          }
          labelDisplayedRows={({ from, to, count }) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                mr: 60,
                ml: 45,
              }}>
              <Typography variant="body2">{`${from}-${to} of ${count}`}</Typography>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};

export default DataTable;
