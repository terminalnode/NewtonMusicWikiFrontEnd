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
  columns,
  rows,
  classes,
  selectAction,
}) {
  return (
    <DataGrid
      autoHeight
      className= { classes.newtonDataGrid }
      columns={ columns }
      rows={ rows }
      pageSize={ 10 }
      onSelectionChange={ selectAction || (() => console.log("NewtonDataGrid: no selectAction defined")) }
    />
  );
}

export default withStyles(styles)(NewtonDataGrid);