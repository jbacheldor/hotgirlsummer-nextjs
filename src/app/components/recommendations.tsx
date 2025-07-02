import Filter from "../components/filter"
import Rec from "./rec"
import SearchBox from "./searchbox"

const Recommendations:React.FC = () => {

    let i = 0
    return (
        <div id="recommendation-block">
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <svg width="0" height="0" id="glow__svg_">
              <filter
                id="glow"
            >
                <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="glow__svg__blur"
                id="glow__svg__res"
                />
                <feBlend
                mode="lighten"
                in="SourceGraphic"
                in2="glow__svg__blur"
                />
  </filter>
        </svg>
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
        #zest {
            position: absolute;
            left: -10px;
            top: -10px;
            filter: blur(.8px);
        }
        #recommendation-block {
            z-index: 5; 
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
            0 0 60px 10px #fff,  /* inner white */
            0 0 100px 20px #f0f, /* middle magenta */
            0 0 140px 30px #0ff; /* outer cyan */
            border: solid white 3px;
        } `}
    </style>
    </div>
    )
}

export default Recommendations