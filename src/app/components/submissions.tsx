import MapView from "./map"

const Submission:React.FC = () => {
    return (

        <div>
        <img id="zest" src="/bullet_point.svg" height="50px"/>
        <h1>Submit Yours</h1>
        <p>title</p>
        <input/>
        <p>description</p>
        <textarea/>
        <p>location</p>
        <input/>
        <MapView/>
        <button>submit</button>

        <style jsx>{`
        div {
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