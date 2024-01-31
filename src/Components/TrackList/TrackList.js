import React, {useState} from "react";
import "./TrackList.css";
import Track from "../Track/Track"

const TrackList = ({tracks, onAdd, onRemove,isRemoval}) =>{
    return(
        <div className="TrackList">
            {/* <Track 
                track={tracks}
                onAdd={onAdd}
            /> */}
            {tracks.map(track => {
                return (
                <Track
                    track={track}
                    key={track.id}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                />
                )
            })}
        </div>
    );
};
export default TrackList;