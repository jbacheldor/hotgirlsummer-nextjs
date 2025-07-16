'use client'
import Link from "next/link"
import DateCircles from "./datecircles";

const Calendar: React.FC = () => {
    let today = new Date(Date.now());
    let month = today.getMonth();
    let year = today.getFullYear();

    var months = [ "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December" ];

    var weeks = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return (
        <div id="calendar-page">
            <div id="title-section">
                <h1>Calendar</h1>
                <hr/>
            </div>
            <div id="calendar-body">
                <div id="month-nav">
                    <h2>* {months[month - 1]} {year} *</h2>
                </div>
                <div id='circles-wrapper'>
                    <div id="calendar-circles">
                        {[...Array(weeks[month - 1])].map((i, index)=>
                            <DateCircles {...{'day': index+1, 'event': true, 'id': '1234'}}/>
                        )}
                    </div>
                </div>
                <div id="month-nav">
                    <button>prev</button>
                    <button>next</button>
                </div>
            </div>
            <div id='calendar-stats'>
                <h3>Monthly Review Stats!!</h3>
                <p>
                    num of events
                </p>
                <p>
                    locations!
                </p>
                <p>
                    avg review!
                </p>
            </div>

            <div id='footer-section'>
                <Link href="/recommendation"><button>Recommendations</button></Link>
            </div>

            <style jsx>
                {`
                    hr {
                        border: 2px solid #b7caab;
                        border-radius: 10px;
                        margin: 10px 0;
                    }
                    #title-section {
                        text-align: center;
                        margin-top: 10px;
                    }
                    #calendar-page {
                        display: flex;
                        align-items: center;
                        align-self: center;
                        flex-direction: column;
                    }
                    #circles-wrapper {
                        width: 100%;
                        display: flex;
                        justify-content: center;
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
                        border: 1px solid white;
                        border-radius: 5px;
                        width: 65%;
                    }
                    #footer-section {
                        position: absolute;
                        bottom: 10px;
                    }
                    #calendar-stats {
                        background-color: #97a98b;
                        border: 2px solid white;
                        border-radius: 5px;
                        margin: 10px;
                        padding: 10px;
                    }
                `}
            </style>
        </div>
    )
}

export default Calendar