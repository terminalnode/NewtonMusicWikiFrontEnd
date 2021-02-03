import endpoint from './endpoint';

export const getAlbumList = async (albumList) => {
    console.log("Fetching all albums.")
    await endpoint.get("/rest/v1/album")
    .then(resp => {
        console.log("Retrived Data:", resp.data)
        albumList.set(resp.data)
    })
    .catch(e => console.log("Error:", e)); 
}