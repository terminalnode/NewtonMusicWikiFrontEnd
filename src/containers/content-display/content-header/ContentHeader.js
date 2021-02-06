import { Typography } from '@material-ui/core';
import './ContentHeader.css';

function ContentHeader({contentName}) {
  const header = headers[contentName] !== undefined
    ? headers[contentName]
    : headers.home;

  return (
    <Typography variant="h1">
      {header}
    </Typography>
  );
}

const headers = {
  home: "Welcome to Newton Music Wiki",
  artists: "Browse artists",
  artists_people: "Browse individual artists",
  artists_bands: "Browse bands",
  albums: "Browse albums",
  songs: "Browse songs",
}

export default ContentHeader;