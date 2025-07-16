import Link from "next/link"
import CalendarBody from "../../components/calender";
import Stats from "@/app/components/stats";

type UrlStuff = {params: Promise<{
    slug: string
}>}

const Calendar:React.FC<UrlStuff> = async ({params}) => {
    const {slug} = await params
    console.log('slug', slug)
    let today = new Date(Date.now());
    let month = today.getMonth();
    let year = today.getFullYear();

    return (
        <div id="calendar-page">
            <div id="title-section">
                <h1>Calendar</h1>
                <hr/>
            </div>
            <CalendarBody month={month} year={year}/>
            <Stats/>

            <div id='footer-section'>
                <Link href="/recommendation"><button>Recommendations</button></Link>
            </div>
        </div>
    )
}

export default Calendar