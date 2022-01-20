// import logo from './logo.svg';
import './App.css';
import Pages from './components/Pages';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route exact path="/home">
            <h1>Welcome</h1>
          </Route>
          <Route exact path="/:valInp">
            <Pages></Pages>
          </Route>
          <Route exact path="/:valInp/:fontColor/:backgroundColor">
            <Pages></Pages>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
