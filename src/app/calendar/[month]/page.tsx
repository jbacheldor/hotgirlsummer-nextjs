import Link from "next/link"
import CalendarBody from "../../components/calender";
import Stats from "@/app/components/stats";
import styles from './style.module.css';

type UrlStuff = {params: Promise<{
    month: string,
}>}

const Calendar:React.FC<UrlStuff> = async ({params}) => {
    const {month} = await params
    let today = new Date(Date.now());

    return (
        <p></p>
        // <div id={styles.calendarpage}>
        //     <div id="title-section">
        //         <h1 id={styles.pagetitle}>Calendar</h1>
        //         <hr/>
        //     </div>
        //     <CalendarBody month={month} year={year}/>
        //     <Stats/>

        //     <div id='footer-section'>
        //         <Link href="/recommendation"><button>Recommendations</button></Link>
        //     </div>
        // </div>
    )
}

export default Calendar