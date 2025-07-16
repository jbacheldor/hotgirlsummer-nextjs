
type Props = {
    day: number;
    event: boolean;
    id: string;
}

const DateCircles: React.FC<Props> = (props: Props) => {
    const {day, event, id} = props
    console.log(props)

    console.log('day', day)

    return (
        <div className={`circumference ${event}`}>
            <div className="day-button">
                {day}
            </div>
            <style jsx>
            {`
                button {

                }
                .day-button {

                }
                .circumference {
                    border-radius: 20px;
                    height: 35px;
                    width: 35px;
                    display: flex;
                    margin: 10px;
                    justify-content: center;
                    align-items: center;
                }
                .true {
                    background-color: #b7caab;
                    color: black;
                }
                .false {
                    background-color: #5A7A30;
                    color: white;
                }
            `}

            </style>
        </div>
    )
}

export default DateCircles;