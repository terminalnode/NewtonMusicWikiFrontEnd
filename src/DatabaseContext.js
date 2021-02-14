import React, { createContext, useState } from "react";

export const DatabaseContext = createContext();

// This context provider is passed to any component requiring the context
export const DatabaseProvider = ({ children }) => {
  const [artistList, setArtistList] = useState([]);
  const [songList, setSongList] = useState([]);
  const [albumList, setAlbumList] = useState([]);

  const [pageTitle, setPageTitle] = useState(null);
  const [artistFetchType, setArtistFetchType] = useState(null);
  const [singleArtist, setSingleArtist] = useState(null);
  const [singleAlbum, setSingleAlbum] = useState(null);
  const [singleSong, setSingleSong] = useState(null);

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