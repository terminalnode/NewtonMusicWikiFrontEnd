import { getArtistList } from '../../../../apis/artistActions';
import ArtistList from '../artist-list/ArtistList';
import './ArtistAllPage.css';
import { useContext, useState } from 'react'
import { DatabaseContext } from '../../../../DatabaseContext'
import { Button, Typography } from '@material-ui/core';
import CreateArtist from '../../../create-artist/CreateArtist';
import NewtonModal from '../../../newton-modal/NewtonModal';

export default function ArtistAllPage() { 
  const [ showCreateWindow, setShowCreateWindow ] = useState(false);
  const data = useContext(DatabaseContext);
  data.setPageTitle("Browse all artists");
  if (data.artistFetchType !== "ALL") {
    reloadArtists(data);
  }

  return (
    <div className="ArtistAllPage">
      <NewtonModal
        open={ showCreateWindow }
        onClose={ () => setShowCreateWindow(false) }
      >
        <div>
          <CreateArtist />
        </div>
      </NewtonModal>

      <div className="PageTop">
        <Button
          variant="outlined"
          color="primary"
          onClick={ () => reloadArtists(data) }>
            Refresh
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={ () => setShowCreateWindow(true) }>
            Create
        </Button>
      </div>

      <div className="PageBottom">
        <ArtistList artists={ data.artistList } />
      </div>
    </div>
  );
}

function reloadArtists(data) {
  getArtistList(data);
}