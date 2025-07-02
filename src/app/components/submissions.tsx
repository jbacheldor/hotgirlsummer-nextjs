

const Submission:React.FC = () => {
    return (

        <div>
        <h1>Submit Yours</h1>
        <p>title</p>
        <input/>
        <p>subject</p>
        <input/>
        <p>location</p>
        <input/>
        <button>submit</button>

        <style jsx>{`
        div {
            background-color: #97A98B;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
            box-shadow:
            0 0 60px 10px #fff,  /* inner white */
            0 0 100px 20px #f0f, /* middle magenta */
            0 0 140px 30px #0ff; /* outer cyan */
        }
        `}
        </style>
    </div>
    )
}

export default Submission