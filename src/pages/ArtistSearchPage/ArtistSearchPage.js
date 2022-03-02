import React from 'react'
// import Search from '../../components/Search/Search';
import './ArtistSearch.css';
import { useSelector } from 'react-redux';

import useArtist from '../../Hooks/useArtist';

import { calculateRating } from '../../utils';
import Artist from '../../components/Artist/Artist';
import Search from '../../components/Search/Search';

const ArtistSearchPage = () => {
    const { search, handleSearchChange, SubmitSearch, navigateToAlbumArtist } = useArtist();
    const { artists } = useSelector(state => state.artist);

    return (
        <div className="artist-page">
            <div className="container">
                <div className={artists.length === 0 ? "search-wrap-v2" : "search-wrap"}>
                    <Search
                        value={search}
                        handleChange={handleSearchChange}
                        onSubmit={SubmitSearch}
                    />
                </div>
                <div className="artist-warp">
                    <div className='row justify-content-center'>
                        {
                            artists.length > 0 && artists.map((artist, index) => {
                                return (
                                    <Artist
                                        key={index + ""}
                                        img={artist?.images.length > 0 ? artist.images[0].url : ""}
                                        name={artist?.name}
                                        followers={artist?.followers.total}
                                        popularity={calculateRating(artist?.popularity)}
                                        navigate={() => navigateToAlbumArtist(artist?.id, artist?.name)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistSearchPage;