import './NewtonAppBar.css';
import { AppBar, IconButton, Toolbar, useTheme } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import RadioIcon from '@material-ui/icons/Radio';

// List of all available icons:
// https://material-ui.com/components/material-icons/

export default function NewtonAppBar({setContentNameFunction}) {
  const classes = useTheme();

  return (
    <AppBar position="top" className={ classes.appBar }>
      <Toolbar variant="dense">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <IconButton onClick={() =>setContentNameFunction("home")}>
          <HomeIcon /> Home
        </IconButton>

        <IconButton onClick={() =>setContentNameFunction("artists")}>
          <RadioIcon /> Performers
        </IconButton>

        <IconButton onClick={() =>setContentNameFunction("artists_people")}>
          <FaceIcon /> Artists
        </IconButton>

        <IconButton onClick={() =>setContentNameFunction("artists_bands")}>
          <GroupIcon /> Bands
        </IconButton>

        <IconButton onClick={() =>setContentNameFunction("albums")}>
          <AlbumIcon /> Albums
        </IconButton>

        <IconButton onClick={() =>setContentNameFunction("songs")}>
          <AudiotrackIcon /> Songs
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}