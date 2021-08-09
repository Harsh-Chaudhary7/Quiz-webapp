import { Button } from '@material-ui/core';
import React from 'react';
import  { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "./Result.css";

const Result = ( {name, score}) => {

    const history = useHistory();
    
    useEffect(() => {   
        if(!name){
            history.push("/");
        }
    }, [name, history]);

    return (
        <div className="result">
            <span className="title">
            Final Score {score}</span>
            <div className="button">
            <Button
            variant="contained"
            color="secondary"
            size="medium"
            style={{marginTop:20,width:"45vw"}}
            href="/"
            >
                Go to Homepage!
            </Button>
            </div>
            
        </div>
    );
};

export default Result
