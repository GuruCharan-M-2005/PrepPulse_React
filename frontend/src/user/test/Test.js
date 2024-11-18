import "./Test.css";
import React, { useRef, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const Intro = ({ clickevent }) => {
    return (
        <div className="Main-Content">
            <h1>React Test!</h1>
            <h2>This Test contains 5 Questions</h2>
            <h2>Each Question Carries 1 Mark</h2>
            <center>
                <button onClick={clickevent}>Test Your Skill</button>
            </center>
        </div>
    );
};

const Certificate = ({ userName, score, total, goBack }) => {
    const certificateRef = useRef();
    const generateCertificate = () => {
        html2canvas(certificateRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "certificate.png";
            link.click();
        });
    };

    return (
        <div>
            <div
                ref={certificateRef}
                style={{
                    padding: "20px",
                    border: "5px solid #004aad",
                    margin: "20px auto",
                    width: "600px",
                    textAlign: "center",
                    position: "relative",
                    background: "linear-gradient(to bottom, #ffffff, #f0f9ff)",
                    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                }}
            >
                <h1 style={{ color: "#004aad", fontSize: "32px", margin: "10px 0" }}>Certificate of Completion</h1>
                <p style={{ fontSize: "18px", margin: "10px 0" }}>This certifies that</p>
                <h2 style={{ color: "#004aad", fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}>{userName}</h2>
                <p style={{ fontSize: "18px", margin: "10px 0" }}>has successfully completed the test</p>
                <p style={{ color: "#5cb85c", fontSize: "20px", fontWeight: "bold", margin: "10px 0" }}>
                    with a score of {score} out of {total}.
                </p>
            </div>
            <button
                onClick={generateCertificate}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#004aad",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginLeft:"400px",
                }}
            >
                Download Certificate
            </button>
            <button
                onClick={goBack}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#d9534f",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginLeft: "10px",
                }}
            >
                Go Back
            </button>
        </div>
    );
};

const End = ({ click, setUserName,setMobile }) => {
    return (
        <div className="End">
            <h1>
                Well done, <br />
                You have Completed the test!
            </h1>
            <input
                type="text"
                placeholder="Enter your name"
                className="End-UserName"
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your mobile"
                className="End-UserName"
                onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={click}>View Certificate</button>
        </div>
    );
};

const Question = ({ q, qno, total }) => {
    return (
        <div className="q">
            <h1>
                {qno}/{total}. {q}
            </h1>
        </div>
    );
};

const Option = ({ opt, clickevent, correctOption, clickedOption, result }) => {
    const optionsList = Object.keys(opt).map((key) => (
        <li
            key={key}
            onClick={() => clickevent(key)}
            className={
                correctOption === key
                    ? "crt"
                    : clickedOption === key
                    ? "incrt"
                    : ""
            }
        >
            {key}) {opt[key]}
        </li>
    ));

    return (
        <div>
            <ul className="Options" disabled={!!clickedOption}>
                {optionsList}
            </ul>
            {result ? (
                correctOption === clickedOption ? (
                    <p className="p1">Correct Answer</p>
                ) : (
                    <p className="p2">Answer is incorrect!</p>
                )
            ) : null}
        </div>
    );
};

const Quiz = ({ setScore, setTotal, goToEndPage }) => {
    const [step, setStep] = useState(1);
    const [correctOption, setCorrectOption] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [result, setResult] = useState(0);

    const questions = {
        1: "React is mainly used for building__",
        2: "___________ can be done while multiple elements needs to be returned from a component",
        3: "What is used to pass data to a component from outside?",
        4: "The arbitrary inputs of components are called _________",
        5: "Ref is used for referring an element or component returned by _____",
    };

    const options = {
        1: { 1: "Database", 2: "Connectivity", 3: "User Interface", 4: "Design Platform" },
        2: { 1: "Abstraction", 2: "Packing", 3: "Insulation", 4: "Wrapping" },
        3: { 1: "setState", 2: "render with arguments", 3: "Prototypes", 4: "Props" },
        4: { 1: "Keys", 2: "Props", 3: "Elements", 4: "Ref" },
        5: { 1: "react()", 2: "render()", 3: "reduce()", 4: "refer()" },
    };

    const correctOptions = { 1: "3", 2: "4", 3: "4", 4: "2", 5: "2" };

    const checkOption = (opt) => {
        if (opt === correctOptions[step]) {
            setScore((prevScore) => prevScore + 1);
            setCorrectOption(correctOptions[step]);
        } else {
            setCorrectOption(0);
        }
        setClickedOption(opt);
        setResult(1);
    };

    const nextStep = () => {
        if (step < Object.keys(questions).length) {
            setStep(step + 1);
            setCorrectOption(0);
            setClickedOption(0);
            setResult(0);
        } else {
            setTotal(Object.keys(questions).length);
            goToEndPage();
        }
    };

    return (
        <div>
            {step <= Object.keys(questions).length ? (
                <div className="QuizApp">
                    <Question q={questions[step]} qno={step} total={Object.keys(questions).length} />
                    <Option
                        opt={options[step]}
                        clickevent={checkOption}
                        correctOption={correctOption}
                        clickedOption={clickedOption}
                        result={result}
                    />
                    <button className="Next" disabled={!clickedOption} onClick={nextStep}>
                        NEXT &gt;
                    </button>
                </div>
            ) : null}
        </div>
    );
};

const Test = () => {

    const nav=useNavigate();
    const [takeTest, setTakeTest] = useState(true);
    const [userName, setUserName] = useState("");
    const [mobile,setMobile]=useState("");
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [showEndPage, setShowEndPage] = useState(false);
    const [showCertificate, setShowCertificate] = useState(false);

    const goToEndPage = () => setShowEndPage(true);
    const goToCertificate = () => {
        console.log("goToCertificate function called");  // Check if function is called
    
        const messageData = {
            "to": mobile,
            "message": "Hello! Your certificate is generated."
        };
    
        axios.post('http://twiliotry-env.eba-3mtbhnid.ap-south-1.elasticbeanstalk.com/api/send', messageData)
            .then(response => {
                console.log("First request success:", response.data);
            })
            .catch(error => console.error("First request error:", error));
    
        axios.post('http://twiliotry-env.eba-3mtbhnid.ap-south-1.elasticbeanstalk.com/api/send-sms', messageData)
            .then(response => {
                console.log("Second request success:", response.data);
            })
            .catch(error => console.error("Second request error:", error));
    
        setShowCertificate(true);
    };
    
    const goBackToStart = () => {
        setTakeTest(true);
        setShowEndPage(false);
        setShowCertificate(false);
        setScore(0);
        setUserName("");
        setMobile("");
        nav('/')
    };

    return (
        <div className="App">
            {takeTest ? (
                <div className="Intro">
                    <Intro clickevent={() => setTakeTest(false)} />
                </div>
            ) : showCertificate ? (
                <Certificate 
                userName={userName} mobile={mobile} score={score} total={total} goBack={goBackToStart} />
            ) : showEndPage ? (
                <End click={goToCertificate} setMobile={setMobile} setUserName={setUserName} />
            ) : (
                <div className="Quiz">
                    <Quiz setScore={setScore} setTotal={setTotal} goToEndPage={goToEndPage} />
                </div>
            )}
        </div>
    );
};

export default Test;


