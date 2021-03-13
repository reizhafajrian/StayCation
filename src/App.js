
import "./assets/scss/style.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import DetailPage from "pages/DetailPage";
import CheckOut from "pages/CheckOut";

function App() {
  return (
    <div className="App">
      <Router>
         <Route path="/" exact component={LandingPage}></Route>
         <Route path="/index" component={Example}></Route>
         <Route path="/checkout" component={CheckOut} />
         <Route path="/properties/:id" component={DetailPage}></Route>
      </Router>
    </div>
  );
}

export default App;
