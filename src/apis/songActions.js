import endpoint from './endpoint';

export const getSongList = async (songList) => {
    console.log("Fetching all songs.")
    await endpoint.get("/rest/v1/song")
    .then(resp => {
        console.log("Retrived Data:", resp.data)
        songList.set(resp.data)
    })
    .catch(e => console.log("Error:", e)); 
}