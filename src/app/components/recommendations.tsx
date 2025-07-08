import Filter from "../components/filter"
import Rec from "./rec"
import SearchBox from "./searchbox"
import { RecommendationType } from "../types/recommendations"
import { useEffect, useState } from "react"


const Recommendations:React.FC = () => {
    const pathName = process.env.BASE_URL
    let [data, setData] = useState<RecommendationType[]>([])

    const dataSort = (value: string) => {
        switch(value){
            case 'votes_desc':
                var newData = [...data];
                newData?.sort((a, b) =>{
                    return  b.votes - a.votes
                })
                setData(newData)
                break;
            case 'votes_asc':
                var newData = [...data];
                newData?.sort((a, b) =>{
                    return  a.votes - b.votes
                })
                setData(newData)
                break;
            case 'dates_desc':
                var newData = [...data];
                newData?.sort((a,b) => {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                })
                setData(newData)
                break;
            case 'dates_asc':
                var newData = [...data];
                newData?.sort((a,b) => {
                    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
                })
                setData(newData)
                break;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`${pathName}/server/getrecommendations`, {
                    method: 'GET'
                })
                .then((response)=> {
                    return response.json()
                })
                .then(data => {
                    setData(data.data as RecommendationType[])
                })
                .catch(e => {throw new Error ('womp womp womp, she is broke')})
            }catch(e){
                console.log('Error fetching data:', e)
            }
        }

        fetchData();

        return () => {
            console.log('Component unmounted or effect re-ran');
        };
    }, [])

    return (
        <div id="recommendation-block">
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <h1>Current Recommendations</h1>
        <SearchBox/>
        <Filter dataSort={dataSort}/>
        <div id="recommendations-block">
            {data && data.map((i,key) => {
                return (
                    <div key={key}>
                        <Rec rec={i}/>
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