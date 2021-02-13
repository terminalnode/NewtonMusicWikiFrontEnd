import './NewtonDataGrid.css';
import { withStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const styles = theme => ({
  newtonDataGrid: {
    margin: theme.spacing(1),
    background: '#333',
  },
})

function NewtonDataGrid({
  checkboxSelection,
  columns,
  rows,
  classes
}) {
  return (
    <DataGrid
      autoHeight
      className= { classes.newtonDataGrid }
      checkboxSelection={ checkboxSelection }
      columns={ columns }
      rows={ rows }
      pageSize={ 10 }
    />
  );
}

export default withStyles(styles)(NewtonDataGrid);