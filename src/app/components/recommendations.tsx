import Filter from "../components/filter"
import Rec from "./rec"
import SearchBox from "./searchbox"

const Recommendations:React.FC = () => {

    let i = 0
    return (
        <div id="recommendation-block">
        <h1>Current Recommendations</h1>
        <SearchBox/>
        <Filter/>
        <div>
            { Array.from({ length: 20 }).map((i, key)=> {
                return (
                    <div key={key}>
                        <Rec/>
                    </div>
                )
            })}
        </div>

    <style jsx>{`
        #recommendation-block {
            background-color: #97A98B;
            padding: 10px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-y: scroll;
            max-height: 500px;
        } `}
    </style>
    </div>
    )
}

export default Recommendations