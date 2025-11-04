import React from "react";
import htmlPic from './assets/html.png';
import cssPic from './assets/css.png';
import jsPic from './assets/js.png';
import reactPic from './assets/react.png';
import pythonPic from './assets/python.png'
function Technologies() {

    return(
        <>
    <div id="technologies"><h2>Technologies</h2></div>
    <section id="carduri">
        <div id="card1">
        <img src={htmlPic} alt="HTML" style={{width: "220px", height: "180px"}}/></div>
        <div id="card2">
        <img src={cssPic} alt="CSS" style={{width: "220px", height: "180px"}}/></div>
        <div id="card3">
        <img src={jsPic} alt="JS" style={{width: "220px", height: "180px"}}/></div>
        <div id="card4">
        <img src={reactPic} alt="React" className="react" style={{width: "220px", height: "180px"}}/>
        </div>
        <div id="card5">
        <img src={pythonPic} alt="Python" className="react" style={{width: "220px", height: "180px"}}/>
        </div>
    </section>
    <div id="learn"><h3>...and more to be learned :)</h3></div>
    </>
);
    }
    export default Technologies;