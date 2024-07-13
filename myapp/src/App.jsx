import './App.css'
import HelloWorld from './HelloWorld.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-end">
          <h1>Hello from React!</h1>
        </div>
        <div class="col-md-6">
          <HelloWorld />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
