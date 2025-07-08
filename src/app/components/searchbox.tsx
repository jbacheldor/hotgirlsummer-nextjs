import { useState } from "react"

type Props = {
    resetQuery: () => void;
    queryData: (value: string) => void
}


const SearchBox:React.FC<Props> = ({resetQuery, queryData}) => {
    const [searchString, setSearchString] = useState('')

    const updateSearchString = (e: any) => {
        setSearchString(e.target.value)
    }

    return (
        <div id="search-box">
            <input placeholder="Search Here" value={searchString} onChange={(e)=> {updateSearchString(e)}}/>
            <button onClick={() => queryData(searchString)}>Search</button>
            <button onClick={resetQuery}>Clear</button>

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