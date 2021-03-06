import { useEffect, useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ComprasContext } from '../context/getCompras'

export default function DenseTable() {
  const [data, setData] = useState([]);

  const context = useContext(ComprasContext)
  const { list }: any = context

  useEffect(() => {
    setData(list)
  }, [list])


  return (
    <TableContainer component={Paper} sx={{ minWidth: 375 , maxWidth: "80%", margin: "auto", borderBottom: "none"}}>
      <Table sx={{ minWidth: 375 , maxWidth: "80%", margin: "auto", borderBottom: "none"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nome do Cliente</TableCell>
            <TableCell align="right">Qntd de compras/Mês</TableCell>
          </TableRow>
        </TableHead>
        {list &&
          <TableBody>
            {list.map((row: {
              count: number; id: string, cliente: string
            }) => (
              <TableRow
                key={row.cliente}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.cliente}
                </TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        }
      </Table>
    </TableContainer>
  );
}