import { useState } from "react"
import MapView from "./map"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const Submission:React.FC = () => {
    const [location, setLocation] = useState('')

    const updateLocation = (e: any) => {
        setLocation(e.target.value)
    }

    return (

        <div id="submission-main-body">
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <h1>Submit Yours</h1>
        <p>title</p>
        <input/>
        <p>description</p>
        <textarea/>
        {/* this should be a placeid from the google api */}
        <p>location</p>
        <input value={location} onChange={e=>updateLocation(e)}/>
        <div id="mapView">
            <MapView value={location}/>
        </div>
        <button>submit</button>

        <style jsx>{`
        #submission-main-body {
            position: relative;
            background-color: #97A98B;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
            box-shadow:
            0 0 30px 10px #fff,  /* inner white */
            0 0 50px 20px #f0f, /* middle magenta */
            0 0 70px 30px #0ff; /* outer cyan */
            border: solid white 3px;
        }
        #mapView {
            margin: 10px 0;
            height: 220px;
            width: 100%;
            border: 2px solid white;
        }
         #zest {
            position: absolute;
            left: -15px;
            top: -15px;
            filter: blur(.2px);
        }
        button {
            position: absolute;
            bottom: 5px;
            right: 5px;
        }
        
        input, textarea {
            width: 100%;
            padding: 3px;
        }
        `}
        </style>
    </div>
    )
}

export default Submission