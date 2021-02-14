import './AlbumDisplay.css';
import { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DatabaseContext } from "../../../../DatabaseContext";
import { getSingleAlbum } from "../../../../apis/albumActions";
import { mapArtistTypeToIcon } from "../../artist-page/artist-list/ArtistList";
import { Box, Typography } from '@material-ui/core';
import { getArtistList, removeAlbumFromArtist, addAlbumToArtist } from '../../../../apis/artistActions';
import ArtistSelectList from '../../../material/artist-select-list/ArtistSelectList';

export default function AlbumDisplay() {
  const [ lastAlbumId, setLastAlbumId ] = useState(null);
  const data = useContext(DatabaseContext);
  const { id } = useParams();
  const history = useHistory();

  if (lastAlbumId !== id) {
    getSingleAlbum(data, id);
    setLastAlbumId(id);
    data.setPageTitle(`Album ${id}`);
    return displayAlbumMissing(id);
  }

  if (data.artistFetchType !== "ALL") {
    getArtistList(data);
  }

  return data.singleAlbum
    ? displayAlbum(history, data)
    : displayAlbumMissing(id, lastAlbumId);
}

function displayAlbumMissing(id, lastAlbumId) {
  return (
    <div>
      {
        lastAlbumId === id
          ? `Failed to load album ${id}`
          : `Loading album ${id}`
      }
    </div>
  );
}

function displayAlbum(history, data) {
  const album = data.singleAlbum;

  return (
    <div>
      <Typography
        variant='h1'
        style={{ paddingBottom: '10px' }}
      >
        {album.name} (#{album.id})
      </Typography>
      <div className='ArtistLinkList'>
        {albumToArtistList(album, history, data)}
      </div>

      <div style={{ paddingBottom: '10px' }} />

      <Typography style={{ paddingBottom: '5px' }} variant='h5'>Add artists to song</Typography>
      <ArtistSelectList
        artists={ data.artistList }
        preSelectedArtists={ album.artists }
        clickAction={ x => addAlbumToArtist(x.id, album.id) }
        preSelectedClickAction={ x => removeAlbumFromArtist(x.id, album.id) }
      />
    </div>
  );
}

function albumToArtistList(album, history, data) {
  if (!album.artists || album.artists.length === 0) {
    return "artist(s) unknown";
  }

  return album.artists.map((x) => {
    return (
      <Box display="flex" flexDirection="row" style={{ paddingBottom: '10px', width: '100%' }}>
        <div style={{paddingLeft: '10px'}} />
        { mapArtistTypeToIcon(x.type) }
        <Typography
          variant='h5'
          className="ArtistLink"
          path={`/artists/${x.id}`}
          onClick={() => history.push(`/artists/${x.id}`)}
          style={{paddingLeft: '10px'}}
        >
          { x.name }
        </Typography>
      </Box>
    );
  });
}