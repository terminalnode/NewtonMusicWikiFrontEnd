import './ContentHeader.css';

function ContentHeader({contentName}) {
  const header = headers[contentName];

  return (
    <div className="ContentHeader">
      {/* TODO create a function for displaying content based on content name */}
      {header}
    </div>
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