import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { 
   id: 'div',
   label: 'Div', 
   minWidth: 170
   },
   { 
    id: 'customer', 
    label: 'Customer Number', 
    minWidth: 100
  },
  { 
    id: 'bill', 
    label: 'Bill TO', 
    minWidth: 100
   },
  {
    id: 'name',
    label: 'Name',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    align: 'right',
  },
];

function createData(div, customer, bill, name, address, phone) {
  // const density = population / size;
  return { div,customer, bill, name, address, phone,  };
}

const rows = [
  createData('1', '70047','70047', 'Stroud,Lindsey','7177 East St.', '(800) 651-1222'),
  createData('1', '70048','70048', 'Troiani,Nicci','812 Arlington Ave.', '(800) 651-1222'),
  createData('1', '70049','70049', 'Fields,George','1421 South Meridian', '(800) 651-1222'),
  createData('1', '70050','70050', 'Moore,Rebecca','943 Endgewood Ave.', '(800) 651-1222'),
  createData('1', '70051','70051', 'Doe,Jane','7482 US 31', '(800) 651-1222'),
  createData('1', '70052','70052', 'Dermot,Jones','1942 Mass Ave.', '(800) 651-1222'),
  createData('1', '70053','70053', 'Merces,Martin','1003 Skydrive St.', '(800) 651-1222'),
  createData('1', '70054','70054', 'Smith,John','562 Main St.', '(800) 651-1222'),
  createData('1', '70047','70047', 'Stroud,Lindsey','7177 East St.', '(800) 651-1222'),
  createData('1', '70048','70048', 'Troiani,Nicci','812 Arlington Ave.', '(800) 651-1222'),
  createData('1', '70049','70049', 'Fields,George','1421 South Meridian', '(800) 651-1222'),
  createData('1', '70050','70050', 'Moore,Rebecca','943 Endgewood Ave.', '(800) 651-1222'),
  createData('1', '70051','70051', 'Doe,Jane','7482 US 31', '(800) 651-1222'),
  createData('1', '70052','70052', 'Dermot,Jones','1942 Mass Ave.', '(800) 651-1222'),
  createData('1', '70053','70053', 'Merces,Martin','1003 Skydrive St.', '(800) 651-1222'),
  createData('1', '70054','70054', 'Smith,John','562 Main St.', '(800) 651-1222'),
  createData('1', '70047','70047', 'Stroud,Lindsey','7177 East St.', '(800) 651-1222'),
  createData('1', '70048','70048', 'Troiani,Nicci','812 Arlington Ave.', '(800) 651-1222'),
  createData('1', '70049','70049', 'Fields,George','1421 South Meridian', '(800) 651-1222'),
  createData('1', '70050','70050', 'Moore,Rebecca','943 Endgewood Ave.', '(800) 651-1222'),
  createData('1', '70051','70051', 'Doe,Jane','7482 US 31', '(800) 651-1222'),
  createData('1', '70052','70052', 'Dermot,Jones','1942 Mass Ave.', '(800) 651-1222'),
  createData('1', '70053','70053', 'Merces,Martin','1003 Skydrive St.', '(800) 651-1222'),
  createData('1', '70054','70054', 'Smith,John','562 Main St.', '(800) 651-1222'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    minHeight: 482,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10,50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

