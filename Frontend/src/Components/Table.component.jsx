import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import SwitchButton from './SwitchButton';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;


  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        style={{ color: "#3f51b5" }}
      >
        {theme.direction === 'rtl' ? <LastPageIcon style={{ color: "#3f51b5" }} /> : <FirstPageIcon style={{ color: "#3f51b5" }} />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page" style={{ color: "#3f51b5" }}>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        style={{ color: "#3f51b5" }}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton

        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        style={{ color: "#3f51b5" }}
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable({ activities, handleSelectActivityButton }) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [switchActiveButton, setSwitchActiveButton] = React.useState(false)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, activities.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const btnClickSelectActivity = (id) => {
    handleSelectActivityButton(id);
  }

  const updateState = () => {
    if (switchActiveButton === false) {
      setSwitchActiveButton(true)
    } else {
      setSwitchActiveButton(false)
    }
  }

  return (

    <TableContainer id='table-container' component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table" size={"small"}>
        <TableBody>
          {(rowsPerPage > 0
            ? activities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : activities
          ).map((activity) => (
            <TableRow key={activity.ActivityId} style={{ borderColor: "#000000" }}>

              <TableCell component="th" scope="row" style={{ borderColor: "#000000" }}>

                <p style={{ color: "#3f51b5" }}>{activity.Description}</p>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                  <Button id="btnSelectActivity" onClick={(evt) => btnClickSelectActivity(activity.ActivityId)}>Vizualizează feedback</Button>
                </ButtonGroup>

              </TableCell>

              <TableCell style={{ width: 160 }} align="right" style={{ borderColor: "#000000" }}>
                <p style={{ color: "#3f51b5" }}>{activity.StartedAt}</p>
              </TableCell>

              <TableCell style={{ width: 160 }} align="right" style={{ borderColor: "#000000" }}>

                <p style={{ color: "#3f51b5" }}>{activity.FinishedAt}</p>
              </TableCell>

              <TableCell style={{ width: 160 }} align="right" style={{ borderColor: "#000000" }}>

                <SwitchButton active={activity.Active} id={activity.ActivityId} updateState={updateState} />
              </TableCell>

              <TableCell style={{ width: 160 }} align="right" style={{ borderColor: "#000000" }}>

                <p style={{ color: "#3f51b5" }}>{activity.Code}</p>
              </TableCell>

            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}  >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter  >
          <TableRow style={{ borderColor: "#000000" }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Toate', value: -1 }]}
              colSpan={3}
              count={activities.length}
              rowsPerPage={rowsPerPage}
              page={page}
              style={{ borderColor: "#000000" }}
              SelectProps={{
                inputProps: { 'aria-label': 'Activități pe pagină' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
