import Link from "next/link"
import CalendarBody from "../../components/calender";
import Stats from "@/app/components/stats";
import styles from './style.module.css';
import { redirect } from "next/navigation";

type UrlStuff = {params: Promise<{
    month: string,
}>}

const Calendar:React.FC<UrlStuff> = async ({params}) => {
    const {month} = await params
    let today = new Date(Date.now());

    redirect(`/calendar/${today.getMonth()}/${today.getFullYear()}`)
}

export default Calendar