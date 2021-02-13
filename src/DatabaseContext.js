import React, { createContext, useState } from "react";

export const DatabaseContext = createContext();

// This context provider is passed to any component requiring the context
export const DatabaseProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState([]);
  const [artistList, setArtistList] = useState([]);
  const [songList, setSongList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [artistFetchType, setArtistFetchType] = useState([]);

  const [singleArtist, setSingleArtist] = useState([]);
  const [singleAlbum, setSingleAlbum] = useState([]);
  const [singleSong, setSingleSong] = useState([]);

  return (
    <DatabaseContext.Provider
      value={{
        pageTitle,
        artistFetchType,
        artistList, songList, albumList,
        singleArtist, singleAlbum, singleSong,
        setPageTitle,
        setArtistFetchType,
        setArtistList, setSongList, setAlbumList,
        setSingleArtist, setSingleAlbum, setSingleSong,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};