import React from 'react'
import { TextField , MenuItem, Button} from '@material-ui/core';
import "./Home.css";
import Categories from '../../Data/Categories';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


const Home = ({name, setName , fetchQuestions}) => {
    const [category, setCategory] = useState ("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
            setError(true);
            return;
        }else {
            setError(false);
           fetchQuestions(category,difficulty)
            history.push("/quiz");
        }
    }

    return (
        <div className="content">
            <div className="settings">
                <span style={{fontSize:30}}>Details</span>

                <div className="settings_select">
                    {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                    <TextField 
                        required
                        style={{marginBottom:25}} 
                        label="Enter Name" 
                        variant="filled"
                        color="secondary"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField select
                        required
                        label="Select Category"
                        variant="filled"
                        style={{marginBottom: 30}}
                        color="secondary"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Categories.map((cat) => (
                              <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                              </MenuItem>
                            ))
                        }

                    </TextField>

                    <TextField select
                    required
                    label="Select Difficulty"
                    variant="filled"
                    style={{marginBottom: 30}}
                    color="secondary"
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>

                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>


                        <MenuItem key="Hard" value="Hard">
                            Hard
                        </MenuItem>

                    </TextField>


                    <Button 
                        variant="contained" 
                        color="Primary" 
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div> 

            </div>
            
            <img src="/quiz.svg"  className="banner" alt="quiz img"/>

        </div>
    );
};

export default Home
