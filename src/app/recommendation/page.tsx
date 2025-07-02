'use client'
import Recommendations from "../components/recommendations"
import Submissions from "../components/submissions"

const Page:React.FC = () => {
    return (
        <div id="rec-body-main">
            <h1>What Should I Do?</h1>
            <p>I have no job! Lots of free time and I live in NYC! So I'm trying to capitalize on this and experience what the  city has to offer. So tell me - what do you think I should try out?!</p>
            <div id="the-meat">
            <Recommendations/>
            <Submissions/>
            </div>
            <button>View Previous Weeks!</button>

        <style jsx>{`
        
            #rec-body-main {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            justify-content: space-around;
            }
            #rec-body-main p {
                text-align: center;
                margin: 0 30px;
                color: white;
                z-index: 10;
            }
            #rec-body-main button {
                display: flex;
                align-self: flex-end;
                margin: 10px;
            }

            #the-meat {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
            }

        `}
        </style>
        </div>
    )
}

export default Page;
