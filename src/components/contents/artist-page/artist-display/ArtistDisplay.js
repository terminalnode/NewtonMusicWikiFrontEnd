import './ArtistDisplay.css';
import { Box, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleArtist } from "../../../../apis/artistActions";
import { DatabaseContext } from "../../../../DatabaseContext";
import { getArtistList, removeSongFromArtist, addSongtoArtist, removeAlbumFromArtist, addAlbumToArtist } from '../../../../apis/artistActions.js';
import { getAlbumList } from '../../../../apis/albumActions'
import { getSongList } from '../../../../apis/songActions'
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ItemSelectList from '../../../material/item-select-list/ItemSelectList';

import AlbumIcon from '@material-ui/icons/Album';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

export default function ArtistDisplay() {
  const [ lastArtistId, setLastArtistId ] = useState(null);
  const updateState = useState(0);
  const data = useContext(DatabaseContext);
  const { id } = useParams();
  const history = useHistory();

  if (lastArtistId !== id) {
    console.log("ALPHA", data)
    getSingleArtist(data, id);
    
    data.setPageTitle(`Performer ${id}`);
    data.setArtistList(getAlbumList(data))
    data.setAlbumList(getArtistList(data))
    data.setSongList(getSongList(data))

    setLastArtistId(id);

    return displayArtistMissing(id);
  }

  console.log("TEST", data.singleArtist);
  return data.singleArtist ? displayArtist(data, history, updateState) : displayArtistMissing(id);
}

function displayArtist(data, history, updateState) {
  const artistToDisplay = data.singleArtist;
  console.log("Artist:", artistToDisplay);
  console.log("Data:", data)

  console.log("AlbumList:", data.albumList || [])

  return (
    <div>
      <Typography
        variant='h1'
        style={{ paddingBottom: '10px' }}
      >
        {artistToDisplay.name} (#{artistToDisplay.id})
      </Typography>
      <div className="ArtistAlbumDiv">
        <Typography
          variant='h2'
          style={{ paddingBottom: '10px' }}
        >
          Albums
        </Typography>
        <div className='AlbumLinkList'>
          {artistToAlbumList(artistToDisplay, history, data)}
        </div>
        <Typography variant='h5'>Add albums to artist</Typography>
      <ItemSelectList
        items={ data.albumList || [] }
        itemType="Album"
        preSelectedItems={ artistToDisplay.albums }
        clickAction={ x => {
          addAlbumToArtist(artistToDisplay.id, x.id)
          const oldValue = updateState[0]
          updateState[1](oldValue + 1)
          console.log("UpdateValue", updateState[0])
        }}
        preSelectedClickAction={ x => removeAlbumFromArtist(artistToDisplay.id, x.id) }
      />
      </div>

      <div className="ArtistSongDiv">
        <Typography
          variant='h2'
          style={{ paddingBottom: '10px' }}
        >
          Songs
        </Typography>
        <div className='AlbumLinkList'>
          {artistToSongList(artistToDisplay, history, data)}
        </div>
        <Typography variant='h5'>Add songs to artist</Typography>
      <ItemSelectList
        items={ data.songList || [] }
        itemType="Song"
        preSelectedItems={ artistToDisplay.songs }
        clickAction={ x => addSongtoArtist(artistToDisplay.id, x.id ) }
        preSelectedClickAction={ x => removeSongFromArtist(artistToDisplay.id, x.id) }
      />
      </div>
     { getMap() }
    </div>
  );
}

function displayArtistMissing(id) {
  return (
    <div>
      NO ARTIST {id} LOL
    </div>
  );
}

function artistToAlbumList(artist, history) {
  if (!artist.albums || artist.albums.length === 0) {
    return "unknown";
  }

  return artist.albums.map((x) => {
    return (
      <Box display="flex" flexDirection="row" style={{ paddingBottom: '10px', width: '100%' }}>
        <div style={{paddingLeft: '10px'}} />
        <AlbumIcon color='primary' />
        <Typography
          variant='h5'
          className="AlbumLink"
          path={`/albumss/${x.id}`}
          onClick={() =>  { 
            history.push(`/albumss/${x.id}`)
          }}
          style={{paddingLeft: '10px'}}
        >
          { x.name }
        </Typography>
      </Box>
    );
  });
}

function artistToSongList(artist, history) {
  if (!artist.albums || artist.albums.length === 0) {
    return "unknown";
  }

  return artist.songs.map((x) => {
    return (
      <Box display="flex" flexDirection="row" style={{ paddingBottom: '10px', width: '100%' }}>
        <div style={{paddingLeft: '10px'}} />
        <AudiotrackIcon color='primary' />
        <Typography
          variant='h5'
          className="AlbumLink"
          path={`/songss/${x.id}`}
          onClick={() => history.push(`/songss/${x.id}`)}
          style={{paddingLeft: '10px'}}
        >
          { x.name }
        </Typography>
      </Box>
    );
  });
}

function getMap(longitude, latitude) {
  const MapDiv = ({children}) => {
    return (
      <div style={{height: '300px', width: '300px'}}>
        {children}
      </div>
    );
  }

  if (!longitude || !latitude) {
    return <MapDiv>Geographic location unknown</MapDiv>
  }

  return (
    <MapDiv>
      <GoogleMapReact
        bootstrapURLKeys={{ /* empty object */ }}
        center={[ latitude, longitude ]}
        zoom={ 3 }
      >
        <LocationPin lat={latitude} lng={longitude} text="Here" />
      </GoogleMapReact>
    </MapDiv>
  );
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationOnIcon />
    <p className="pin-text">{text}</p>
  </div>
)