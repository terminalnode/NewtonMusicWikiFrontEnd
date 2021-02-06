import './NewtonDataGrid.css';
import { DataGrid } from '@material-ui/data-grid';

export default function NewtonDataGrid({
  checkboxSelection,
  columns,
  rows,
  pageSize
}) {
  return (
    <div className="NewtonDataGrid">
        <DataGrid
          checkboxSelection={ checkboxSelection }
          columns={ columns }
          rows={ rows }
          pageSize={ pageSize }
        />
    </div>
  );
}