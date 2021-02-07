import endpoint from './endpoint';

export const getAlbumList = async (data) => {
  await endpoint.get("/rest/v1/album")
    .then(resp => {
      console.log("Fetched albums");
      data.setAlbumList(resp.data.albums);
    })
    .catch(e => console.log("Error:", e));
}