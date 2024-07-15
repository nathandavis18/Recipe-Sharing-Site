import {Form, Button} from 'react-bootstrap';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function NewRecipe(){
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [image, setImage] = useState();
    const navigate = useNavigate();

    function submitForm(event){
        event.preventDefault();
        let formInfo = new FormData();
        formInfo.append('name', name);
        formInfo.append('desc', desc);
        formInfo.append('ingredients', ingredients);
        formInfo.append('steps', steps);
        if(image != null){
            formInfo.append('image', image, image.name)
        }
    
        fetch("http://34.228.197.39:8000/api/recipe/new",
            {
                method: 'POST',
                body: formInfo,
            }
        ).then(results => results.text()).then(results => console.log(results));
    
        return navigate('/');
    }

    return(
        <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
                <Form encType="multipart/form-data" onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="img">
                        <Form.Label>Display Image</Form.Label>
                        <Form.Control type="file" accept="image" onChange={(e) => setImage(e.target.files[0])}></Form.Control>
                        <Form.Text className="text-muted">
                            Optional image for your recipe!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the Recipe Name" onChange={(e) => setName(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Describe this dish" onChange={(e) => setDesc(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ingredients">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Give ingredients" onChange={(e) => setIngredients(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="steps">
                        <Form.Label>Steps</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="How to make this dish" onChange={(e) => setSteps(e.target.value)} required/>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary" type="submit"> 
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default NewRecipe;
