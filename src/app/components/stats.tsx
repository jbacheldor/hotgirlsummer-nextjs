'use client'

const Stats:React.FC = () => {

    return (
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

            <style jsx>{`
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
export default Stats