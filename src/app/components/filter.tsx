
const Filter:React.FC = () => {

    return (
        <div>
            <div id="filter-box">
                Sort By:
                <button >
                    Votes
                    <img src="/up-arrow.svg" width="20px"/>
                    <img  src="/down-arrow.svg" width="20px"/>
                </button>
                <button >
                    Date
                    <img src="/up-arrow.svg" width="20px"/>
                    <img  src="/down-arrow.svg" width="20px"/>
                </button>
            </div>
            <style jsx>{`
            #filter-box{
                background: #B7CAAB;
                padding: 5px 10px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #filter-box button {
                margin: 0 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
            } `}
            </style>
        </div>
    )
}

export default Filter