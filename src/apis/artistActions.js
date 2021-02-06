import endpoint from './endpoint';

export const getArtistList = async (data) => {
    await endpoint.get("/rest/v1/artist")
        .then(resp => {
            console.log("Fetched artists")
            data.setArtistList(resp.data.artists)
        })
        .catch(e => console.log("Error:", e));
}
