import { Container, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArtist } from "../../../../apis/artistActions";
import { DatabaseContext } from "../../../../DatabaseContext";
import GoogleMapReact from 'google-map-react';

export default function ArtistDisplay() {
  const [ lastArtistId, setLastArtistId ] = useState(null);

  const data = useContext(DatabaseContext);
  const { id } = useParams();
  data.setPageTitle(`Performer ${id}`);

  if (lastArtistId !== id) {
    getSingleArtist(data, id);
    setLastArtistId(id);
    return displayArtistMissing(id);
  } else {
  }

  console.log(data.singleArtist);
  return displayArtist(data.singleArtist);
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
  return (
    <Container>
      <Typography variant='h1'>{artist.name} (#{artist.id})</Typography>
      <Typography>{artist.description}</Typography>
      {getMap(artist.longitude, artist.latitude)}
    </Container>
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
      / >
    </MapDiv>
  );
}