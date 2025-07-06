import Activity from "@/app/components/activity"

type UrlStuff = {params: Promise<{
    slug: string
}>}

// look into the slug
// https://nextjs.org/docs/app/getting-started/layouts-and-pages
const PreviousActivityPage:React.FC<UrlStuff> = async ({params}) => {
    // const pathName = process.env.BASE_URL
   
    const { slug } = await params
    // const [activityData, setActivityData] = useState<prevActivityType>()

    // const getData = async () => {
    // try{
    //     await fetch(`${pathName}/server/getActivity/` + new URLSearchParams({
    //         id: slug,
    //         }).toString(), {
    //             method: 'GET',
    //         })
    //         .then((data)=>{
    //             // this is bad, but i need to leave my house, so i'm going to push it anyways
    //             setActivityData(data.json as any as prevActivityType);
    //         }).catch(e=> {
    //             throw new Error('error during call', e)
    //         })
    // }catch(e){
    //     throw new Error('can not return previous activity')
    // }
    // }  

    // const [isLoading, setIsLoading] = useState(false)


    // console.log('slug', slug)


    // useEffect(()=> {
    //     getData()
    // }, [])

    return (
        <div>
            <Activity slug={slug}/>
            {/* {isLoading && 
                <div> woahhh mama mia she is loaindg big big time</div>
            }
            {activityData && !isLoading && 
            <div>
                no loading & data mama mia!!
            </div>
                }
            HELLOOOOOO */}
        </div>
    )
}

export default PreviousActivityPage


// export default async function PreviousActivityPage({
//   params
// } : {
//   params: Promise<{ slug: string }>
// }) 

// {
    //  const pathName = process.env.BASE_URL
//   const { slug } = await params
    // const [activityData, setActivityData] = useState<prevActivityType>()
    // const [isLoading, setIsLoading] = useState(false)
//   const post = await getPost(slug)
 
//   return (
//         <div>
//             {slug}
//             {/* {isLoading && 
//                 <div> woahhh mama mia she is loaindg big big time</div>
//             }
//             {activityData && !isLoading && 
//             <div>
//                 no loading & data mama mia!!
//             </div>
//                 }
//             HELLOOOOOO */}
//         </div>
//   )
// }
