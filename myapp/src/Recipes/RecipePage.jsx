import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Recipe.css';
import {Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipePage(){
    const [content, setContent] = useState([]);


    useEffect(() => {
        async function getInfo(){
            let response = await fetch('http://18.212.247.157:8000/api/recipe');
            const content = await response.json();
            return content;
        }
        getInfo().then(result => setContent(result)).catch(error => console.log(error));
    }, []);

    console.log(content);
    var recipeList = content.map(obj => {
        return(
            <div className="text-center singleCard" key={obj.id}>
                <Card key={obj.id} style={{width: '300px'}}>
                    <Card.Img variant="top" src={obj.image} className="cardImg"/>
                    <Card.Body className="cardBody">
                        <Card.Title>{obj.name}</Card.Title>
                        <Card.Text>
                            {obj.description}
                        </Card.Text>
                        <Button as={Link} to="/RecipeDetails" variant="secondary" className="detailsBtn" state={{id: obj.id}}>Details</Button>
                    </Card.Body>
                </Card> 
            </div>
        );
    });
    return(
        <div className="row cards">
            <div className="col-lg-5" />
            <div className="col-md-4">
                <br />{recipeList}<br />
                <div className="newRecipeBtnDiv">
                    <Button as={Link} to="/Recipes/New" variant="secondary" className="recipeBtn">Add New Recipe</Button>
                </div>
            </div>
        </div>
    );
}

export default RecipePage;