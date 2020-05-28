import React from 'react';

function Content(props) {

    return ( 
        <li className="content">
            <h3 className="question">{props.question}</h3>
            <p className="answer">{props.answer}</p>
            <p className="answer">{props.answer2}</p>
            <p className="answer">{props.answer3}</p>
            <p className="answer">{props.answer4}</p>
        </li>
    );
	
}

export default Content;