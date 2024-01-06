import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
//select a session or create a new one
    //dropdown with existing sessions you can click
    //field to type in new session name
        //submit button for new session
//ask your question
    //field where you type q
    const captureQuestion = () => {

    };
    //submit button
    const sendQuestion = () => {

    };
//reveal a random question from your session
    //button to request question
    const [revealedQuestion, setQuestion] = useState([]);
    const getQuestion = () => {
        useEffect(() => {
            fetch('http://localhost:3000/selectQuestion')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setQuestion(data)
            })
        }, [])
    };
    //field where question shows up
//define my functions, then pass variable into onclick below
//fetch requests to send http requests to back end
//don't worry about drop down for now, just hard code everything to go to test session 1

    return (
        <div>
            <Menu>
            </Menu>

            <Field>
            </Field>

            <Button>
                Start New Session!
            </Button>

            <Field>

            </Field>

            <Button onClick={sendQuestion}>
                Submit Your Question!
            </Button>
            
            <Button onClick={getQuestion}>
                Get A Question!
            </Button>

            <Field>

            </Field>
        </div>
    );
};

const Button = ({}) => {
    return (
        <button onClick={}>

        </button>
    )
};

const Field = ({}) => {
    return (
        
    )
};

const Menu = ({}) => {
    return (

    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />,);