import Filter from "../components/filter"
import Rec from "./rec"
import SearchBox from "./searchbox"
import { RecommendationType } from "../types/recommendations"
import { useEffect, useState } from "react"


const Recommendations:React.FC = () => {
    let [data, setData] = useState<RecommendationType[]>()

    useEffect(() => {
        fetch('')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e => {throw new Error ('womp womp womp, she is broke')})
    }, [])

    return (
        <div id="recommendation-block">
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <h1>Current Recommendations</h1>
        <SearchBox/>
        <Filter/>
        <div id="recommendations-block">
            {data && data.map((i,key) => {
                return (
                    <div key={key}>
                        <Rec vote={i.votes}/>
                    </div>
                )
            })}
            { Array.from({ length: 20 }).map((i, key)=> {
                return (
                    <div key={key}>
                        <Rec vote={0}/>
                    </div>
                )
            })}
        </div>

    <style jsx>{`
        #recommendations-block {
            overflow-y: scroll;
            max-height: 300px;
        }
        #zest {
            position: absolute;
            left: -10px;
            top: -10px;
            filter: blur(.2px);
        }
        #recommendation-block {
            background-color: #97A98B;
            padding: 10px;
            border-radius: 10px;
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: center;
            max-height: 500px;
            box-shadow:
            0 0 30px 10px #fff,  /* inner white */
            0 0 50px 20px #f0f, /* middle magenta */
            0 0 70px 30px #0ff; /* outer cyan */
            border: solid white 3px;
            margin-left: 20px;
        } `}
    </style>
    </div>
    )
}

export default Recommendations