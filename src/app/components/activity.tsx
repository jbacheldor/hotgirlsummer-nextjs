'use client'
import { prevActivityType } from "@/app/types/recommendations"
import { useEffect, useState } from "react"
import Rating from "./rating"
import Link from "next/link"

type Props = {
    slug: string
}

const Activity:React.FC<Props> = ({slug}) => {
    const pathName = process.env.BASE_URL
    const [activityData, setActivityData] = useState<prevActivityType>()
    const [isLoading, setIsLoading] = useState(true)
    const [date, setDate] = useState<any[]>()

    // makes date title legible
    const parseDate = (date: string) => {
        const split_date:any[] = date.split('-')

        var months = [ "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December" ];

        var weeks = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // leap years are divisible by 4 evenly but not 100!!
        // we aren't checking 100 tho b/c ,, i won't be around that long hopefully
        var leapyear = parseInt(split_date[2]) % 4 == 0
        
        // replaces number of days in feb with 29 if it's a leapyear
        if(leapyear) weeks[1] = 29

        console.log('all together', weeks[parseInt(split_date[1]) - 2] + parseInt(split_date[2]))
        var stop = parseInt(split_date[1]) - 2
        let week_count = parseInt(split_date[2])

        for(var i = 0; i <= stop; i++){
            week_count += weeks[i]
        }

        split_date[1] = months[parseInt(split_date[1]) - 1]
        split_date.push(Math.ceil(week_count / 7) + 1)
        return split_date;
    }

    const getData = async () => {
    try{
        console.log('womp womp')
        await fetch(`${pathName}/server/getactivity?` + new URLSearchParams({
            id: slug,
            }).toString(), {
                method: 'GET',
            })
            .then((response) => {return response.json()})
            .then((data)=>{
                // this is bad, but i need to leave my house, so i'm going to push it anyways
                setActivityData(data.data[0] as any as prevActivityType);
                    setIsLoading(false)
                    setDate(parseDate(data.data[0].date))
            }).catch(e=> {
                throw new Error('error during call', e)
            })
    }catch(e){
        throw new Error('can not return previous activity')
    }
    } 


    useEffect(()=> {
        getData()
    }, [])

    return (
        <div>
            {isLoading && 
                <div> woahhh mama mia she is loaindg big big time</div>
            }
            {activityData && !isLoading && 
            <div id='activity'>
                <h1>{activityData.Activities.title ? activityData.Activities.title  : 'Title'}</h1>
                <div id="activity-header">
                    {date &&
                        <div id="activity-date">
                            <h3>Week {date[3]}</h3>
                            <span>*</span>
                            <h3>{date[1]} {date[2]}, {date[0]}</h3>
                        </div>
                    }
                </div>
                <div id='activity-body'>
                    <h4>{activityData.date}</h4>
                    <span>Description: {activityData.Activities.description}</span>
                    <span>Location: {activityData.Activities.location}</span>
                    <span>Votes: {activityData.Activities.votes}</span>
                </div>
                <div id="bottom-section">
                    <div id="activity-review">
                        <h3>Review:</h3>
                        <span>{activityData.review}</span>
                        <Rating rating={activityData.rating}/>
                        {/* put in stars here to represent the rating of the activity */}
                    </div>
                    <div id="activity-pic">
                        {!activityData.picture &&
                            <img src={'/globe.svg'} height={'100px'}>
                            </img>
                            }
                    </div>
                </div>
            </div>
            }
            non-loading part: {slug}

            <div id='footer'>
                {/* have to figure out how to get the next closest date???? */}
                <button>previous</button>
                <div>
                    <Link href="/recommendation"><button>home</button></Link>
                    <Link href="/calendar"><button>calendar</button></Link>
                </div>
                <button>next</button>
            </div>
            <style jsx>
                {`
                #activity {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 10px;
                    padding: 5px;
                    width: 100%;
                }
                #activity-date {
                    display: flex;
                    flex-direction: row;
                }
                #activity-date h3 {
                    margin: 0 10px;
                }
                #activity-header {
                    flex-direction: column
                    background-color: #97a98b;
                    border-radius: 5px;
                }
                #activity-review {
                    background-color: #97a98b;
                    border-radius: 5px;
                    max-width: 70%;
                    border: 1px white solid;
                    padding: 10px;
                }
                #activity-body {
                    padding: 10px;
                    background-color: #97a98b;
                    border-radius: 5px;
                    border: 1px white solid;
                }
                #activity-pic {
                    width: 30%;
                    background-color: #97a98b;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    border: 1px white solid;
                    margin: 0 10px;
                    height: 100%;
                    padding: 10px 0;
                }
                #footer {
                    position: absolute;
                    bottom: 5px;
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    width: 100%
                }
                #bottom-section {
                    flex-direction: row; 
                    display: flex;
                    margin: 5px 10px;
                    align-items: center;
                }
                `}
            </style>
        </div>
    )

}

export default Activity