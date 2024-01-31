import React, {useCallback, useState} from "react";
import "./SearchBar.css";

const SearchBar = ({onSearch}) =>{
    const [term, setTerm] = useState("");
    const handleTermChange = useCallback((event)=>{
        setTerm(event.target.value);
    },[]);

    const search = useCallback(()=>{
        onSearch(term);
    },[onSearch,term])
    return(
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song Title" value={term}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    );
};
export default SearchBar;