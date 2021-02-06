import './ArtistList.css';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'artistType', headerName: 'Artist type', width: 150 },
];

export default function ArtistList({artists}) {
    return (
        <div className="ArtistList">
            <DataGrid
                columns={ columns }
                rows={ artists }
            />
        </div>
    );
}