import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Radio from './components/Radio';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Where the music start!
        </p> */}
        <Radio />
              {/* <a
                className='App'
                href='/mm'
                style={{textDecoration:'none'}}
                >
                  MM
                </a> 
        <Router>
          <Routes>
                <Route exact path="/" />
                
                <Route exact path="/mm" component={Radio}/>
               
                <Route component={NoMatch} />
          </Routes>
        </Router>
      </header>*/}
    </div>
  );
}

export default App;
