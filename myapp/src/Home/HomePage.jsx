import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css'
import Image from './images/me.jpg';

function HomePage(){
    const [info, setInfo] = useState('');

    useEffect(() => {
        async function getInfo(){
            let response = await fetch('http://localhost:8000/api/home');
            const content = await response.json();
            return {info: content};
        }
        getInfo().then(result => setInfo(result.info));
    }, []);

    return (
        <>
            <div className="container">
                <div className="text-center my-header">
                    <h1 className="display-4">Nathan Davis</h1>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <p className="my-info">
                            {info.intro} <br /><br />
                            {info.aboutMe} <br /><br />
                            Check out this recipes page <Link to='/Recipes'>here</Link>, or use the link in the navbar above!
                        </p>
                    </div>
                    <div className="col-md-6 me-pic-div">
                        <img srcSet={Image} className="me-pic" alt="Image of me" title="Image of me"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;