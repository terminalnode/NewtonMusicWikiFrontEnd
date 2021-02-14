import './ArtistSelectList.css';
import { Box, TextField, Tooltip, Typography } from "@material-ui/core";
import { useState } from 'react';

export default function ArtistSelectList({
  artists,
  preSelectedArtists,
  clickAction,
  preSelectedClickAction,
}) {
  const [ filterText, setFilterText ] = useState("");
  const preSelectedArtistIds = preSelectedArtists
    ? preSelectedArtists.map(x => x.id)
    : [];

  return (
    <div>
      <TextField
        style={{ paddingBottom: '0.3rem' }}
        label="Filter artists"
        variant='filled'
        onChange={ x => setFilterText(x.target.value) }
      />

      <Box display="flex" flexWrap="wrap">
        { artists.map(artist => {
          if (!artist.name.toLowerCase().includes(filterText.toLowerCase())) {
            return null;
          }

          const isSelected = preSelectedArtistIds.includes(artist.id);
          const action = isSelected ? preSelectedClickAction : clickAction;

          return (<ArtistClicker
            artist={ artist }
            clickAction={ action }
            isSelected={ isSelected }
          />);
        })}
      </Box>
    </div>
  );
}

function ArtistClicker({artist, clickAction, isSelected}) {
  if (!artist || !artist.name) {
    return null;
  }

  return (
    <Tooltip title={ isSelected ? "Click to remove!" : "Click to add!" }>
      <div
        className={ isSelected ? "ArtistClickerSelected" : "ArtistClicker" }
        onClick={ clickAction ? () => clickAction(artist) : null }
      >
        <Typography>{ artist.name }</Typography>
      </div>
    </Tooltip>
  );
}