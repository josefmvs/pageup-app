
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
