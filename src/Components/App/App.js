import React, {useState, useCallback} from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import PlayList from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";
//https://open.spotify.com/track/4o3XxiQ9BljY4OU38zanC0?si=f44d15c545164fbd


const App = () =>{
    const [searchResults, setsearchResults] = useState([
        // {name:'playlist_name4', artist:'playlist_artist4', album:'playlist_album4', id:'playlist_4'},
        // {name:'playlist_name5', artist:'playlist_artist5', album:'playlist_album5', id:'iplaylist_5'},
        // {name:'playlist_name3', artist:'playlist_artist3', album:'playlist_album3', id:'playlist_3'}
    ]);
    const [playlistTracks, setPlaylistTracks] = useState([
        // {name:'playlist_name1', artist:'playlist_artist1', album:'playlist_album1', id:'playlist_1'},
        // {name:'playlist_name2', artist:'playlist_artist2', album:'playlist_album2', id:'iplaylist_2'},
        // {name:'playlist_name3', artist:'playlist_artist3', album:'playlist_album3', id:'playlist_3'}
      ]
    );
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const search = useCallback((term)=>{
        Spotify.search(term).then(setsearchResults);
    },[]);

    const addTrack = useCallback((track)=>{
        if(playlistTracks.some((savedTrack)=>savedTrack.id===track.id)) {
            return;
        }
        setPlaylistTracks((prev)=>[ ...prev, track]);
    },[playlistTracks]);

    const removeTrack = useCallback((track)=>{
        setPlaylistTracks((prev)=>
            prev.filter((song)=>song.id!==track.id)
        );
    },[playlistTracks])

    const addPlaylistName = useCallback((name)=>{
        setPlaylistName(name);
    },[])

    const savePlaylist = useCallback(()=>{
        const trackUris = playlistTracks.map((track)=>track.uri);
        Spotify.savePlaylist(playlistName,trackUris).then(()=>{
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
        })
    },[playlistTracks,playlistName])

    return(
        <div>
            <h1>Jammming</h1>
            <div className="App">
                <SearchBar onSearch={search}/>
                <div className="App-playlist">
                    <SearchResults searchResults={searchResults} onAdd={addTrack}/>
                    <PlayList
                        playlistTracks = {playlistTracks}
                        playlistName = {playlistName}
                        onNameChange = {addPlaylistName}
                        onRemove = {removeTrack}
                        onSave = {savePlaylist}
                        
                    />
                </div>
            </div>
        </div>
    );
};
export default App;
