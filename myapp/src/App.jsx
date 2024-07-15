import Navigation from './Navigation/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';
import RecipePage from './Recipes/RecipePage.jsx';
import RecipeDetails from './Recipes/RecipeDetails.jsx';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Recipes" element={<RecipePage />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
