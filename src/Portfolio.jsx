import React from 'react'
import toDo from './assets/to-do.png'
import expenseTracker from './assets/expense-tracker.png'
import textToSpeech from './assets/text-to-speech.png'
import calculator from './assets/calculator.png'
import guessNumber from './assets/guess.png'
import { FaReact, FaHtml5, FaCss3, FaPython} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


function Portfolio() {

    return(
        <>
        <div id="portfolio"><h2>Portfolio</h2></div>
<div className="creations-container">
    <div className="creation-card">
        <div className="project-image-container">
            <img src={toDo} alt="To Do App Screenshot"/>
        </div>
        <div className="project-details">
            <h3 className="project-title">To-Do List</h3>
            <p className="project-description">A simple and intuitive task management application designed to help users efficiently track and organize their daily to-dos.</p>
            <div className="project-links">
                <a href="https://to-do-list-app-local-storage.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo">Demo</a>
                <a href="https://github.com/andreidina04/to-do-list-app-local-storage" target="_blank" rel="noopener noreferrer" className="btn btn-github">Code</a>
            </div>
                <div className='projects-technologies'>
                <FaReact className='icon-react' style={{fill: "#61DBFB"}}/>
                    <FaHtml5 className='icon-html' style={{fill: "#E34C26"}}/>
                    <FaCss3 className='icon-css' style= {{fill: "#2965f1"}}/>
            </div>
        </div>
        
    </div>

    <div className="creation-card">
        <div className="project-image-container">
            <img src={expenseTracker} alt="Expense Tracker Screenshot"/>
        </div>
        <div className="project-details">
            <h3 className="project-title">Expense Tracker</h3>
            <p className="project-description">Track and categorize daily expenses with ease, providing clear financial oversight and budget management.</p>
            <div className="project-links">
                <a href="https://expense-tracker-rust-psi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo">Demo</a>
                <a href="https://github.com/andreidina04/expense-tracker" target="_blank" rel="noopener noreferrer" className="btn btn-github">Code</a>
            </div>
             <div className='projects-technologies'>
                <FaReact className='icon-react' style={{fill: "#61DBFB"}}/>
                    <FaHtml5 className='icon-html' style={{fill: "#E34C26"}}/>
                    <FaCss3 className='icon-css' style= {{fill: "#2965f1"}}/>
            </div>
            </div>
    </div>
    <div className="creation-card">
        <div className="project-image-container">
            <img src={textToSpeech} alt="Text To Speech Screenshot"/>
        </div>
        <div className="project-details">
            <h3 className="project-title">Text to Speech</h3>
            <p className="project-description">A text-to-speech converter utilizing the Web Speech API to transform written input into natural-sounding, synthesized human speech.</p>
            <div className='footer'>
            <div className="project-links">
                <a href="https://text-to-speech-seven-lovat.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo">Demo</a>
                <a href="https://github.com/andreidina04/text-to-speech" target="_blank" rel="noopener noreferrer" className="btn btn-github">Code</a>
            </div>
            <div className='projects-technologies'>
                <IoLogoJavascript className='icon-js' style={{fill: "#F0DB4F"}}/>
                    <FaHtml5 className='icon-html' style={{fill: "#E34C26"}}/>
                    <FaCss3 className='icon-css' style= {{fill: "#2965f1"}}/>
            </div>
            </div>
        </div>
    </div>

    <div className="creation-card">
        <div className="project-image-container">
            <img src={calculator} alt="Calculator Screenshot"/>
        </div>
        <div className="project-details">
            <h3 className="project-title">Calculator</h3>
            <p className="project-description">An interactive calculator application featuring a clean, minimalist interface for fast arithmetic calculations.</p>
            <div className="project-links">
                <a href="https://calculator-nine-psi-88.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo">Demo</a>
                <a href="https://github.com/andreidina04/calculator" target="_blank" rel="noopener noreferrer" className="btn btn-github">Code</a>
            </div>
            <div className='projects-technologies'>
                <IoLogoJavascript className='icon-js' style={{fill: "#F0DB4F"}}/>
                    <FaHtml5 className='icon-html' style={{fill: "#E34C26"}}/>
                    <FaCss3 className='icon-css' style= {{fill: "#2965f1"}}/>
            </div>
        </div>
    </div>
    <div className="creation-card">
        <div className="project-image-container">
            <img src={guessNumber} alt="Guess Number Screenshot"/>
        </div>
        <div className="project-details">
            <h3 className="project-title">Guess the Number</h3>
            <p className="project-description">A Python GUI game using CustomTkinter where you guess a random number with limited attempts and score tracking.</p>
            <div className="project-links">
                <a href="https://github.com/andreidina04/python-guess-number-ctk" target="_blank" rel="noopener noreferrer" className="btn btn-github">Code</a>
            </div>
             <div className='projects-technologies'>
                <FaPython className='icon-python' style={{fill: "#0be754ff"}}/>
            </div>
            </div>
    </div>
</div>

        </>
    );
}

export default Portfolio;