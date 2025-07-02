import { useState } from "react"

const Filter:React.FC = () => {
    const [voteSort, setVoteSort] = useState('false')
    const [dateSort, setDateSort] = useState('false')

    // need to send a lil query here y'allll
    const sortByVotes = () => {
        if(voteSort == 'asc'){
            setVoteSort('desc')
        }
        else {
            setVoteSort('asc')
        }
        setDateSort('false')
    }

    const sortByDate = () => {
        if(dateSort == 'asc'){
            setDateSort('desc')
        }
        else {
            setDateSort('asc')
        }
        setVoteSort('false')
    }

    return (
        <div>
            <div id="filter-box">
                Sort By:
                <button onClick={sortByVotes}>
                    Votes
                    {voteSort == 'desc' &&  <img src="/up-arrow.svg" width="20px"/>}
                    {voteSort == 'asc' &&  <img src="/down-arrow.svg" width="20px"/>}
                </button>
                <button onClick={sortByDate}>
                    Date
                    {dateSort == 'desc' &&  <img src="/up-arrow.svg" width="20px"/>}
                    {dateSort == 'asc' &&  <img src="/down-arrow.svg" width="20px"/>}
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