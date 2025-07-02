import Filter from "../components/filter"
import Rec from "./rec"
import SearchBox from "./searchbox"

const Recommendations:React.FC = () => {

    let i = 0
    return (
        <div id="recommendation-block">
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <h1>Current Recommendations</h1>
        <SearchBox/>
        <Filter/>
        <div>
            { Array.from({ length: 20 }).map((i, key)=> {
                return (
                    <div key={key}>
                        <Rec vote={0}/>
                    </div>
                )
            })}
        </div>

    <style jsx>{`
        #zest {
            position: absolute;
            left: -10px;
            top: -10px;
            filter: blur(.8px);
        }
        #recommendation-block {
            background-color: #97A98B;
            padding: 10px;
            border-radius: 10px;
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: center;
            overflow-y: scroll;
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