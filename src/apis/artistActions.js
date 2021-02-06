import endpoint from './endpoint';

export const getArtistList = async (data) => {
    console.log("Fetching all artists.")
    await endpoint.get("/rest/v1/artist")
    .then(resp => {
        console.log("Retrived Data:", resp.data)
        data.setArtistList(resp.data)
    })
    .catch(e => console.log("Error:", e));

    // await endpoint.get("/rest/v1/artist")
    //    .then(r => artistList.set(r))
    //    .catch(e => console.log(e));
}
