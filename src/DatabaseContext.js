import React, { createContext, useState } from "react";

export const DatabaseContext = createContext();

// This context provider is passed to any component requiring the context
export const DatabaseProvider = ({ children }) => {
  const [artistList, setArtistList] = useState([]);
  const [songList, setSongList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [artistFetchType, setArtistFetchType] = useState([]);

  return (
    <DatabaseContext.Provider
      value={{
        artistList,
        artistFetchType,
        songList,
        albumList,
        setArtistList,
        setArtistFetchType,
        setSongList,
        setAlbumList,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};