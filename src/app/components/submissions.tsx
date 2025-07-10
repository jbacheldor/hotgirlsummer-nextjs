import { useState } from "react"
import MapView from "./map"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { emit } from "process";

type FormState = {
    title: string,
    description: string,
    location: string
}

const initialFormState = {
    title: '',
    description: '',
    location: ''
}

const Submission:React.FC = () => {
    const pathName = process.env.BASE_URL
    const [submissionMessage, setMessage] = useState('')
    const [submissionForm, setForm] = useState<FormState>(initialFormState)

    const updateForm = (e:any) => {
        if(e.target.id == 'title') {
            setForm({...submissionForm, title: e.target.value})
        }
        else if(e.target.id == 'description'){
            setForm({...submissionForm, description: e.target.value})
        }
        else {
            setForm({...submissionForm, location: e.target.value})
        }
    }

    const submitTake = async (e: any) =>
        {
            e.preventDefault()
            try {
                await fetch(`${pathName}/server/submitrecommendations`, {
                    method: 'POST',
                    body: JSON.stringify(submissionForm)
                })
                .then(response=>{
                    if(!response.ok){                        
                        setMessage('Error Submitting Recommendation')
                        throw new Error('api not returning 200')
                    }
                    else {
                        // maybe this should be an alert instead
                        // or can we count it down and then erase it
                        setMessage('Submission Success')
                        setForm(initialFormState)
                        // reset the forms 
                    }
                })
                .catch(e => {
                    setMessage('Error Submitting Recommendation')
                    throw new Error('error in submitting', e)
                })
            }catch (e){
                setMessage('Error Submitting Recommendation')
                throw new Error('new submitting recommendation')
            }
        }

    
    return (

        <div id="submission-main-body">
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <h1>Submit Yours</h1>
        {submissionMessage!='' && <span>{submissionMessage}</span>}
        <form>
            <p>title</p>
            <input id="title" value={submissionForm.title} onChange={(e) => updateForm(e)}/>
            <p>description</p>
            <textarea id="description" value={submissionForm.description} onChange={(e) => updateForm(e)}/>
            {/* this should be a placeid from the google api */}
            <p>location</p>
            <input id="location" value={submissionForm.location} onChange={(e) => updateForm(e)}/>
            <div id="mapView">
                {/* <MapView value={location}/> */}
            </div>
            <button onClick={(e)=> {
                submitTake(e)
            }}>submit</button>
        </form>

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