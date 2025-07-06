import Link from "next/link"


const Calendar: React.FC = () => {

    return (
        <div>
            <button><Link href="/recommendation">Recommendations</Link></button>
            <div>
                calendar here
            </div>
            <button>prev</button>
            <button>next</button>
        </div>
    )
}

export default Calendar