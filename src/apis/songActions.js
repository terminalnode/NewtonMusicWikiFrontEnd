import endpoint from './endpoint';

export const getSongList = async (data) => {
  await endpoint.get("/rest/v1/song")
    .then(resp => {
      console.log("Fetched songs");
      data.setSongList(resp.data.songs);
    })
    .catch(e => console.log("Error:", e));
}

export const getSingleSong = async (data, id) => {
  await endpoint.get(`/rest/v1/song/${id}`)
    .then(resp => {
      console.log(`Fetched song ${id}`);
      data.setSingleSong(resp.data);
    })
    .catch(e => console.log("Error:", e));
}