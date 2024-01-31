import React, {useCallback} from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const PlayList = ({playlistTracks, onNameChange, onRemove, onSave, playlistName}) =>{
    const hadleNameChange = useCallback((e)=>{
        onNameChange(e.target.value);
    },[onNameChange])

    return(
        <div className="Playlist">
            <input onChange={hadleNameChange} defaultValue={"New Playlist"} value={playlistName}/>
            <TrackList
                tracks = {playlistTracks}
                onRemove = {onRemove}
                isRemoval={true}
            />
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>

        </div>
    );
};
export default PlayList;