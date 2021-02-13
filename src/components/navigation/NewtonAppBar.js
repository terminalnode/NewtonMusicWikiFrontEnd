import './NewtonAppBar.css';
import { AppBar, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import RadioIcon from '@material-ui/icons/Radio';
import { Link } from "react-router-dom";
import { useState } from 'react';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function NewtonAppBar({ window, children, title }) {
  // List of all available icons:
  // https://material-ui.com/components/material-icons/
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const container = window !== undefined ? () => window().document.body : undefined;

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={ classes.toolbar } />
        <List>
          <Link to="/" className="Link">
            <ListItem>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <Link to="/artists/all" className="Link">
            <ListItem>
              <ListItemIcon><RadioIcon /></ListItemIcon>
              <ListItemText primary="Performers" />
            </ListItem>
          </Link>

          <Link to="/artists/people" className="Link">
            <ListItem>
              <ListItemIcon><FaceIcon /></ListItemIcon>
              <ListItemText primary="Artists" />
            </ListItem>
          </Link>

          <Link to="/artists/bands" className="Link">
            <ListItem>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary="Bands" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <Link to="/albums" className="Link">
            <ListItem>
              <ListItemIcon><AlbumIcon /></ListItemIcon>
              <ListItemText primary="Albums" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <Link to="/songs" className="Link">
            <ListItem>
              <ListItemIcon><AudiotrackIcon /></ListItemIcon>
              <ListItemText primary="Songs" />
            </ListItem>
          </Link>
        </List>

      </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar variant="dense">
          <IconButton
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={ container }
            variant="temporary"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{ keepMounted: true }} // better mobile performance
            classes= {{ paper:classes.drawerPaper }}
          >
            { drawer }
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { children }
      </main>
    </div>
  );
}