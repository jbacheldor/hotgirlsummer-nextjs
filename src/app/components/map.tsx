
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

type Props = {
    value?: string,
}

const MapView:React.FC<Props> = ({value}) => {


    return(
        <APIProvider region='us' apiKey={''} onLoad={() => console.log('Maps API has loaded.')}>
         <Map
            defaultZoom={10.5}
            defaultCenter={ { lat: 40.730610, lng: -73.935242 } }
            onCameraChanged={ (ev: MapCameraChangedEvent) =>
                console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }>
        </Map>
        </APIProvider>
    )
}

export default MapView;