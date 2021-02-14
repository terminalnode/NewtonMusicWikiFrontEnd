import endpoint from './endpoint';
import { getSingleSong } from './songActions';

export const getSingleArtist = async (data, id) => {
  await endpoint.get(`/rest/v1/artist/${id}`)
    .then(resp => {
      console.log(`Fetched atist ${id}`);
      console.log(resp.data);
      data.setSingleArtist(resp.data);
    })
    .catch(e => console.log("Error:", e));
}

export const getArtistList = async (data) => {
  await endpoint.get("/rest/v1/artist")
    .then(resp => {
      console.log("Fetched artists");
      data.setArtistFetchType("ALL");
      data.setArtistList(resp.data.artists);
    })
    .catch(e => console.log("Error:", e));
}

export const getPersonArtistList = async (data) => {
  if (data.artistFetchType === "ALL") {
    data.setArtistFetchType("PERSON");
    data.setArtistList(data.artistList.filter(x => x.artistType === "BAND"));
    return;
  }

  await endpoint.get("/rest/v1/artist/type/PERSON")
    .then(resp => {
      console.log("Fetched person artists");
      data.setArtistFetchType("PERSON");
      data.setArtistList(resp.data.artists);
    })
    .catch(e => console.log("Error:", e));
}

export const getBandArtistList = async (data) => {
  if (data.artistFetchType === "ALL") {
    data.setArtistList(data.artistList.filter(x => x.artistType === "BAND"));
    data.setArtistFetchType("BAND");
    return;
  }

  await endpoint.get("/rest/v1/artist/type/BAND")
    .then(resp => {
      console.log("Fetched bands");
      data.setArtistFetchType("BAND");
      data.setArtistList(resp.data.artists);
    })
    .catch(e => console.log("Error:", e));
}

export const removeSongFromArtist = async (artistId, songId) => {
  return await endpoint.get(`/rest/v1/artist/${artistId}/songs/remove/${songId}`)
    .catch(e => console.log("Error:", e));
}

export const addSongtoArtist = async (artistId, songId) => {
  return await endpoint.get(`/rest/v1/artist/${artistId}/songs/add/${songId}`)
    .catch(e => console.log("Error:", e));
}