import endpoint from './endpoint';

export const getArtistList = async (data) => {
  await endpoint.get("/rest/v1/artist")
    .then(resp => {
      console.log("Fetched artists");
      data.setArtistList(resp.data.artists);
      data.setArtistFetchType("ALL");
    })
    .catch(e => console.log("Error:", e));
}

export const getPersonArtistList = async (data) => {
  if (data.artistFetchType === "ALL") {
    data.setArtistList(data.artistList.filter(x => x.artistType === "BAND"));
    data.setArtistFetchType("PERSON");
    return;
  }

  await endpoint.get("/rest/v1/artist/type/PERSON")
    .then(resp => {
      console.log("Fetched person artists");
      data.setArtistList(resp.data.artists);
      data.setArtistFetchType("PERSON");
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
      data.setArtistList(resp.data.artists);
      data.setArtistFetchType("BAND");
    })
    .catch(e => console.log("Error:", e));
}