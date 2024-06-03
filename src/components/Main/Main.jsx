import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    const handleCardClick = (prompt) => {
        setInput(prompt);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSent();
        }
    };

  return (
    <div className='main'>
        <div className="nav">
            <p>Chat with AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ? (<>
                <div className="greet">
                    <p><span>Hello, user.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div onClick={() =>	handleCardClick("Suggest beautiful places to see on an upcoming road trip")} className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div onClick={() =>	handleCardClick("Give me a code in c++ to detect a loop in Linked list")} className="card">
                        <p>Give me a code in c++ to detect a loop in Linked list</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div onClick={() =>	handleCardClick("Briefly summarize this concept: urban planning")} className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div onClick={() =>	handleCardClick("Brainstorm team bonding activities for our work retreat")} className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                </div>
            </>)
            :(<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            )}

        <div className="main-bottom">
            <div className="search-box">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Enter a prompt here"
                    onKeyDown={handleKeyDown}
                />
                <div>
                    {input ? <img onClick={onSent} src={assets.send_icon} alt="" /> : null}
                </div>
            </div>
                <p className="bottom-info">
                    This AI may display inaccurate info, including about people, so double-check its responses.
                    <br></br>
                    Made by TARUN SRIRAM
                </p>
            </div>
        </div>
    </div>
  );
};

export default Main