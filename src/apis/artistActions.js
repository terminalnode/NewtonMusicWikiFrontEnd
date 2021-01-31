import endpoint from './endpoint';

export const getArtistList = async (artistList) => {
    await endpoint.get("/rest/v1/artist")
        .then(r => artistList.set(r))
        .catch(e => console.log(e));
}
