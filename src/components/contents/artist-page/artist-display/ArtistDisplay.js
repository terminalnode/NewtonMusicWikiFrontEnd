import './ArtistDisplay.css';
import { Button, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArtist } from "../../../../apis/artistActions";
import { DatabaseContext } from "../../../../DatabaseContext";
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlbumList from '../../album-page/album-list/AlbumList';
import SongList from '../../song-page/song-list/SongList';

export default function ArtistDisplay() {
  const [ lastArtistId, setLastArtistId ] = useState(null);
  const data = useContext(DatabaseContext);
  const { id } = useParams();

  if (lastArtistId !== id) {
    getSingleArtist(data, id);
    setLastArtistId(id);
    data.setPageTitle(`Performer ${id}`);
    return displayArtistMissing(id);
  }

  console.log(data.singleArtist);
  return data.singleArtist ? displayArtist(data.singleArtist) : displayArtistMissing(id);
}

function displayArtistMissing(id) {
  return (
    <div>
      NO ARTIST {id} LOL
    </div>
  );
}

function displayArtist(artist) {
  // artists.album (list)
  // artist.songs (list)
  console.log("ARTIST: ", artist);
  console.log("ARTIST ALBUM: ", artist.albums);

  return (
    <div>
      <Typography variant='h1'>{artist.name} (#{artist.id})</Typography>
      <Typography>{artist.description}</Typography>

      <div className="artistPageAlbumList">
        <Typography variant='h2'>Albums</Typography>
        <Button>Add New Album</Button>
        <AlbumList albums={ artist.albums } />   
      </div>

     <div className="artistPageSongList">
        <Typography variant='h2'>Songs</Typography>
        <SongList songs={ artist.songs } />
      </div>


      {getMap(artist.longitude, artist.latitude)}
    </div>
  );
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