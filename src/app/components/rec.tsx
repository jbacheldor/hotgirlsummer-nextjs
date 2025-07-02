import { useState } from 'react';

type Props = {
    vote : number;
    title?: string;
    description?: string;
    location?: string;
}

const Rec:React.FC<Props> = ({vote}) => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        if(vote+1 != count) setCount(count+1)
    }

    const decreaseCount = () => {
        if(vote-1 != count) setCount(count-1)
    }

    return (
        <div className="rec-body">
        <div className="rec-left">
            <p className="title">title</p>
            <p className="rec-body-paragraph">lorum ipsum girly pop lorum lorum lorum</p>
        </div>
        <div className="rec-right">
            <p>1 day ago</p>
            <div className="counts">
                <button onClick={increaseCount}>
                    <img src="/up-arrow.svg" width="20px" height="20px"/>
                </button>
                <p>{count}</p>
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