import React, {useCallback, useState} from "react";
import "./Track.css";

const Track = ({track, onAdd,onRemove,isRemoval}) =>{
    const addTrack = useCallback(
        (event) => {
            onAdd(track);
        },[onAdd, track]
    );

    const removeTrack = useCallback(
        (event)=>{
            onRemove(track);
        },[onRemove, track]
    )

    const renderAction = () =>{
        if(!isRemoval){
            return (
                <button className="Track-action" onClick={addTrack}>
                    +
                </button>
            );
        }else{
            return (
                <button className="Track-action" onClick={removeTrack}>
                    -
                </button>
            );
        }
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>
                {track.artist} | {track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};
export default Track;