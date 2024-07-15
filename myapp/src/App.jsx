import Navigation from './Navigation/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipePage from './Recipes/RecipePage.jsx';
import RecipeDetails from './Recipes/RecipeDetails.jsx';
import NewRecipe from './Recipes/NewRecipe.jsx';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<RecipePage />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
          <Route exact path="/Recipes/New" element={<NewRecipe />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
