import CalendarBody from '@/app/components/calender';
import styles from '../style.module.css';
import Stats from '@/app/components/stats';
import Link from 'next/link';

type UrlStuff = {params: Promise<{
    year: string,
    month: string,
}>}

const Trial:React.FC<UrlStuff> = async ({params}) => {
     const {year, month} = await params

    return (
        <div className={styles.calendarpage}>
            <div id="title-section" className={styles.titlesection}>
                <h1 className={styles.pagetitle}>Calendar</h1>
                <hr/>
            </div>
            <CalendarBody month={month} year={year}/>
            <Stats/>

            <div className={styles.footersection}>
                <Link href="/recommendation"><button>Recommendations</button></Link>
            </div>
        </div>
    )
}

export default Trial