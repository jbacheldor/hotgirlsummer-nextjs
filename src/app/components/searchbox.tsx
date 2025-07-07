import { useState } from "react"


const SearchBox:React.FC = () => {
    const [searchString, setSearchString] = useState('')

    const updateSearchString = (e: any) => {
        setSearchString(e.target.value)
    }
    

    // on this we can do client search or regex or whatever 
    const searchQuery = () => {
        // do we need to search just title, or description, or all values
        console.log(searchString)
    }

    return (
        <div id="search-box">
            <input placeholder="Search Here" value={searchString} onChange={(e)=> {updateSearchString(e)}}/>
            <button onClick={searchQuery}>Search</button>

            <style jsx>{`
            #search-box {
                background-color: #B7CAAB;
                border-radius: 5px;
                padding: 7px 10px;
                width: 80%;
                display: flex;
                justify-content: space-between;
                margin: 10px;
                }
            #search-box input {
                width: 100%;
                margin-right: 10px;
            }
            `}
            </style>
        </div>
    )
}

export default SearchBox