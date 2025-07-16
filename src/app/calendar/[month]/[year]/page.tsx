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

     console.log('slug', month)
     console.log('slugggg', year)
    return (
        <div id={styles.calendarpage}>
            <div id="title-section">
                <h1 id={styles.pagetitle}>Calendar</h1>
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

export default Trial