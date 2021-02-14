import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DatabaseContext } from "../../../../DatabaseContext";

export default function AlbumDisplay() {
  const [ lastAlbumId, setLastAlbumId ] = useState(null);
  const data = useContext(DatabaseContext);
  const { id } = useParams();

  if (lastAlbumId !== id) {
    //getSingleArtist(data, id);
    setLastAlbumId(id);
    data.setPageTitle(`Album ${id}`);
    return displayAlbumMissing(id);
  }

  return (
    <div>
      ALBUM NUMBER {id}
    </div>
  );
}

function displayAlbumMissing(id) {
  return (
    <div>
      NO ALBUM {id} LOL
    </div>
  );
}