

const SearchBox:React.FC = () => {

    return (
        <div id="search-box">
            <input placeholder="Search Here"/>
            <button>Search</button>

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