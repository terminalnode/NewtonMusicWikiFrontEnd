import './ArtistList.css';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'artistType', headerName: 'Artist type', width: 150 },
];

export default function ArtistList({artists}) {
    console.log("i am list destroyer of man")
    console.log(artists);
    if (artists.length !== 0) {
        artists[0].id = 1;
    }
    //const rows = getRows(artists);

    return (
        <DataGrid
            columns={ columns }
            rows={ artists }
        />
    );
}

/*
function getRows(artists) {
    return artists.map(x => {{
        id: x.id
        name: x.name
        artistType: artists.type
    }});
}
*/