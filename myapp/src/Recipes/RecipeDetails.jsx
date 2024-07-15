import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function RecipeDetails(){
    const [content, setContent] = useState([]);
    const location = useLocation();
    const id = location.state.id;
    const fetchUrl = 'http://localhost:8000/api/recipe/details/' + id;
    useEffect(() =>{
        fetch(fetchUrl).then(result => result.json()).catch(error => console.log(error))
        .then(result => setContent(result)).catch(error => console.log(error));
    }, [])
    console.log(content);
    return(
        <>
        <pre>
            <img src={content.image} title={content.name + " Image"} /><br />
            <b>{content.name}</b> - {content.description}<br /><br />

            <h3>Ingredients</h3>
            {content.ingredients}<br /><br />
            <h3>Steps</h3>
            {content.steps}<br />
        </pre>
        </>
    );
}

export default RecipeDetails;