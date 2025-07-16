
type Props = {
    rating: number;
}

const Rating:React.FC<Props> = ({rating}) => {
    var light = rating 
    var dark = 10 - rating

    return (
        <div>
            <h3>Rating:{rating}/10</h3>
            {[...Array(light)].map((i) =>
                <img key={i} src={'/Star-light.svg'} height={'30px'}/>
            )}
            {[...Array(dark)].map((i) =>
                <img key={i} src={'/Star-dark.svg'} height={'30px'}/>
            )}
        </div>
    )
}

export default Rating;