'use client'
import { prevActivityType } from "@/app/types/recommendations"
import { useEffect, useState } from "react"

type Props = {
    slug: string
}

const Activity:React.FC<Props> = ({slug}) => {
    const pathName = process.env.BASE_URL
    const [activityData, setActivityData] = useState<prevActivityType>()
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
    try{
        await fetch(`${pathName}/server/getActivity/` + new URLSearchParams({
            id: slug,
            }).toString(), {
                method: 'GET',
            })
            .then((data)=>{
                // this is bad, but i need to leave my house, so i'm going to push it anyways
                setActivityData(data.json as any as prevActivityType);
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
            HELLOOOOOO
        </div>
    )

}

export default Activity