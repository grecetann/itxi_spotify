import React from 'react'
import './AlbumArtist.css';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import './AlbumArtist.css';
import useAlbum from '../../Hooks/useAlbum';
import Album from '../../components/Album/Album';
const  AlbumArtistPage =()=>{
const location = useLocation();

  const { getAlbums } = useAlbum(location.state.id);

  const { albums } = useSelector((state) => state.album);

  React.useEffect(() => {
    console.log(location);
    getAlbums();
  }, []);

  return (
    <div className="album-page">
      <div className="container">
        <div className="title-header">
          <h3>{location.state.name}</h3>
          <h6>Album</h6>
        </div>
        <div className="row justify-content-center">
          {albums &&
            albums.map((album, i) => {
              return (
                <Album
                  key={i + ""}
                  name={album?.name}
                  date={album?.release_date}
                  img={album?.images[1].url}
                  tracks={album?.total_tracks}
                  artist={location.state.name}
                  preview={album?.external_urls.spotify}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default AlbumArtistPage;