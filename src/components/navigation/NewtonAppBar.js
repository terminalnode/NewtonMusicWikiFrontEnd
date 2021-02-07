import './NewtonAppBar.css';
import { AppBar, IconButton, Toolbar, useTheme } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import RadioIcon from '@material-ui/icons/Radio';
import { Link } from "react-router-dom";

// List of all available icons:
// https://material-ui.com/components/material-icons/

export default function NewtonAppBar() {
  const classes = useTheme();

  return (
    <AppBar position="top" className={ classes.appBar }>
      <Toolbar variant="dense">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Link to="/" className="Link">
          <IconButton>
            <HomeIcon /> Home
          </IconButton>
        </Link>

        <Link to="/artists/all" className="Link">
          <IconButton>
            <RadioIcon /> Performers
          </IconButton>
        </Link>

        <Link to="/artists/people" className="Link">
          <IconButton>
            <FaceIcon /> Artists
          </IconButton>
        </Link>

        <Link to="/artists/bands" className="Link">
          <IconButton>
            <GroupIcon /> Bands
          </IconButton>
        </Link>

        <Link to="/albums" className="Link">
          <IconButton>
            <AlbumIcon /> Albums
          </IconButton>
        </Link>

        <Link to="/songs" className="Link">
          <IconButton>
            <AudiotrackIcon /> Songs
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}