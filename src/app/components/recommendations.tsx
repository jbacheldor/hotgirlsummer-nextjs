import Filter from "../components/filter"
import Rec from "./rec"
import SearchBox from "./searchbox"
import { RecommendationType } from "../types/recommendations"
import { useEffect, useState } from "react"
import Pagination from "./pagination"


const Recommendations:React.FC = () => {
    const pathName = process.env.BASE_URL
    let [data, setData] = useState<RecommendationType[]>([])
    let [searchData, setSearchData] = useState<RecommendationType[]>([])
    const [searchError, setSearchError] = useState(false)

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

    // do a little regular expression girl
    const queryData = (value: string) => {
        const queryData: RecommendationType[] = []
        data.forEach((i)=> {

            var regex = new RegExp("(" + value + ")", "i");
            console.log("regex", regex)

            var title = regex.test(i.title)
            var des = regex.test(i.description)

            // if either has a string found we add it in
            if(des == true || title == true){
                queryData.push(i)
            }
        })
        if(queryData.length == 0){
            setSearchError(true)
        }
        else {
            setSearchError(false)
            setSearchData(queryData)
        }
    }

    const resetSearch = () => {
        setSearchData([])
        setSearchError(false)
    }

    const onChangePage = () => {
        // change the results distributed 
    }

    return (
        <div id="recommendation-block">
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <h1>Current Recommendations</h1>
        <SearchBox resetQuery={resetSearch} queryData={queryData}/>
        <Filter dataSort={dataSort}/>
        {searchError &&
                <div id="search-error-message">
                    No search found :(
                </div>
        }
        <div id="recommendations-block">
            {!searchError && searchData && searchData.map((i, key)=> {
                return (
                    <div key={`search-data-${key}`}>
                        <Rec rec={i}/>
                    </div>
                )
            })}
            {searchData.length != 1 && data && data.map((i,key) => {
                return (
                    <div key={`data-${key}`}>
                        <Rec rec={i}/>
                    </div>
                )
            })}
        </div>
        <Pagination results={data.length} onChangePage={onChangePage}/>

    <style jsx>{`
        #search-error-message {
            text-align: center;
            margin: 10px 0;
        }
        #recommendations-block {
            overflow-y: scroll;
            max-height: 300px;
            width: 100%; 
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