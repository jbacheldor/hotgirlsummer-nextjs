import { useEffect, useState } from 'react';
import { RecommendationType } from "../types/recommendations"

type Props = {
  rec: RecommendationType
}

const Rec:React.FC<Props> = ({rec}) => {
    const {votes, title, description, location, created_at: date} = rec
    const [count, setCount] = useState(votes)

    const increaseCount = () => {
        if(votes+1 != count) setCount(count+1)
    }

    const decreaseCount = () => {
        if(votes-1 != count) setCount(count-1)
    }

    const calculateDate = () => {
        let submit_date = new Date(date)
        const formattedDate = `${submit_date.getDate()}-${submit_date.getMonth() + 1}-${submit_date.getFullYear()}`

        let today  = new Date();

        let diffTime = Math.abs(submit_date - today);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

        if(diffDays < 1){
            // see if it's less than an hour 
            if(diffTime / 3600000 < 1){
                return `${Math.floor(diffTime / 60000)} minutes ago`
            }
            else {
                return `${Math.floor(diffTime / 3600000)} hours ago`
            }
        }

        return `${Math.floor(diffTime / 86400000)} days ago` 
        // return formattedDate
    }

    useEffect(()=> {
       
    }, [])

    return (
        <div className="rec-body">
        <div className="rec-left">
            <p className="title">{title ? title : 'title'}</p>
            <p className="rec-body-paragraph">{description ? description : '---'}</p>
        </div>
        <div className="rec-right">
            <p>{calculateDate()}</p>
            <div className="counts">
                <button onClick={increaseCount}>
                    <img src="/up-arrow.svg" width="20px" height="20px"/>
                </button>
                <p>{votes}</p>
                <button onClick={decreaseCount}>
                    <img src="/down-arrow.svg" width="20px" height="20px"/>
                </button>
            </div>
        </div>


        <style jsx>{`
        .rec-body{
            background-color: #B7CAAB;
            margin: 10px;
            padding: 7px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            text-align: end;
        }
        .rec-left {
            padding: 2px;
            display: flex;
            flex-direction: column;
            text-align: left;
            text-overflow: ellipsis;
            max-width: 50ch;
            margin-right: 10px;
        }
        .rec-right {
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0px 5px;
        }

        .rec-right p {
            text-align: right;
            margin: 0;
        }

        .title {
            font-weight: 700;
            text-align: left;
            margin: 0px;
        }

        .rec-body-paragraph {
            height: 100%;
        }

        .counts {
            padding: 5px 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            height: 20px;
            align-items: center;
            align-self: flex-end;
        }
        .counts button {
            padding: 0;
            height: 20px;
            width: 25px;
        }
        .counts p {
            padding: 0 5px;
            width: 30px;
            text-align: center;
        }`}            
        </style>

    </div>
    )
}

export default Rec;