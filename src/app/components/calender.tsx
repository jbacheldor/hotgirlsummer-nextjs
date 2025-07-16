'use client'
import DateCircles from "./datecircles";

type Props = {
    month: number;
    year: string;
}

const CalendarBody: React.FC<Props> = ({month, year}) => {
    var months = [ "january", "february", "march", "april", "may", "june", 
            "july", "august", "september", "october", "november", "december" ];
    // let index = months.indexOf(month)
    

    var weeks = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var weekDays = ['S', 'M', 'T', 'W', 'Th', 'F', 'S']

    return (
            <div id="calendar-body">
                <div id="month-nav">
                    <h2>* {months[month-1]} {year} *</h2>
                </div>
                <div id='circles-wrapper'>
                    <div id="weekdays">
                        {weekDays.map((i, index)=> <span key={index}>{i}</span>)}
                        </div>
                    <div id="calendar-circles">
                        {[...Array(weeks[month-1])].map((i, index)=>
                            <DateCircles {...{'day': index+1, 'event': true, 'id': '1234'}}/>
                        )}
                    </div>
                </div>
                <div id="month-nav">
                    <button>prev</button>
                    <button>next</button>
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
                        border: 1px solid white;
                        border-radius: 5px;
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
                        align-items: center;
                        justify-content: center;
                        width: 385px;
                    }
                    `}
                </style>
            </div>
    )
}

export default CalendarBody;