import Link from "next/link"


const Calendar: React.FC = () => {

    return (
        <div>
            <Link href="/recommendation"><button>Recommendations</button></Link>
            <div>
                calendar here
            </div>
            <button>prev</button>
            <button>next</button>
        </div>
    )
}

export default Calendar