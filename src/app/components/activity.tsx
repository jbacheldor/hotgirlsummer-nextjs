'use client'
import { prevActivityType } from "@/app/types/recommendations"
import { useEffect, useState } from "react"

type Props = {
    slug: string
}

const Activity:React.FC<Props> = ({slug}) => {
    const pathName = process.env.BASE_URL
    const [activityData, setActivityData] = useState<prevActivityType>()
    const [isLoading, setIsLoading] = useState(true)

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
                setActivityData(data.data as any as prevActivityType);
                    setIsLoading(false)
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
            <div>
                no loading & data mama mia!!
            </div>
                }
            non-loading part: {slug}
        </div>
    )

}

export default Activity