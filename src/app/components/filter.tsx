import { useState } from "react"

type Props = {
    dataSort: (value: string) => void
}

const Filter:React.FC<Props> = (Props) => {
    const {dataSort} = Props

    const [voteSort, setVoteSort] = useState('false')
    const [dateSort, setDateSort] = useState('false')

    const reset = () => {
        setVoteSort('false')
        setDateSort('false')

        // resets back to original value
        dataSort('votes_desc')
    }

    // need to send a lil query here y'allll
    const sortByVotes = () => {
        if(voteSort == 'asc'){
            setVoteSort('desc')
            dataSort('votes_desc')
        }
        else {
            setVoteSort('asc')
            dataSort('votes_asc')
        }
        setDateSort('false')
    }

    const sortByDate = () => {
        if(dateSort == 'asc'){
            setDateSort('desc')
            dataSort('date_asc')
        }
        else {
            setDateSort('asc')
            dataSort('date_asc')
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
                <button onClick={reset}>
                    Reset
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