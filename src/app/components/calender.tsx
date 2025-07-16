'use client'
import DateCircles from "./datecircles";

type Props = {
    month: string;
    year: string;
}

const CalendarBody: React.FC<Props> = ({month, year}) => {
    var months = [ "january", "february", "march", "april", "may", "june", 
            "july", "august", "september", "october", "november", "december" ];
    // let index = months.indexOf(month)
    var month_num = parseInt(month)
    var year_num = parseInt(year)

    var today = new Date(Date.now())
    var today_month = today.getMonth()
    var today_year = today.getFullYear()

    var next = false;
    var prev = false;

    // if the current year is greater than the one we are querying
    // then we should be able to hit next 
    if(today_year > year_num) next = true
    // if it's the same year but the month is less than the current month
    if(today_year == year_num && today_month > month_num) next = true

    // prev is tricky b/c we only want to go back so far
    // also we only want to show months w/ data 
    if(today.getFullYear() <= year_num) prev = true
    

    var weeks = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var weekDays = ['S', 'M', 'T', 'W', 'Th', 'F', 'S']

    return (
            <div id="calendar-body">
                <div id="month-nav">
                    <h2>* {months[month_num-1]} {year} *</h2>
                </div>
                <div id='circles-wrapper'>
                    <div id="calendar-circles">
                    <div id="weekdays">
                        {weekDays.map((i, index)=> <span key={index}>{i}</span>)}
                        </div>
                        {[...Array(weeks[month_num-1])].map((i, index)=>
                            <DateCircles {...{'day': index+1, 'event': true, 'id': '1234'}}/>
                        )}
                    </div>
                </div>
                <div id="month-nav">
                    <button disabled={!prev}>prev</button>
                    <button disabled={!next}>next</button>
                </div>

                <style jsx>
                    {`
                    #weekdays {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    #weekdays span {
                        margin: 10px 22px;
                    }
                    #circles-wrapper {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    #month-nav h2{
                        width: 100%;
                        text-align: center;
                    }
                    #month-nav{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        // border: 1px solid white;
                        padding: 10px 0px;
                        background-color: #b7caab;
                        border-radius: 10px;
                        margin: 10px;
                    }
                    #month-nav button {
                        margin: 0 20px;
                    }
                    #calendar-body {
                        width: 60%;
                        background-color: #97a98b;
                        border: 2px solid white;
                        border-radius: 5px;
                        padding: 10px;
                        margin-top: 10px;
                    }
                    #calendar-circles {
                        display: flex;
                        flex-flow: row wrap;
                        padding: 0 5px;
                        width: 400px;
                        border: 1px solid white;
                        border-radius: 5px;
                    }
                    `}
                </style>
            </div>
    )
}

export default CalendarBody;