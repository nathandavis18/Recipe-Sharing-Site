import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Recipe.css';

function RecipePage(){
    const [content, setContent] = useState([]);


    useEffect(() => {
        async function getInfo(){
            let response = await fetch('http://localhost:8000/api/recipe');
            const content = await response.json();
            return content;
        }
        getInfo().then(result => setContent(result)).catch(error => console.log(error));
    }, []);

    console.log(content);
    var recipeList = content.map(obj => {
        return(
            <li key={obj.id}>
                <img src={obj.image} className="listImg"/><br />
                <b><Link to="/RecipeDetails" state={{id: obj.id}}>{obj.name}</Link></b><br />
                {obj.description}<br />
            </li> 
        );
    });
    return(
        <ul>{recipeList}</ul>
    );
}

export default RecipePage;