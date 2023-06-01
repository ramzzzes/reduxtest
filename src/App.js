import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Home from './Home'
import User from './User';
import { useState } from 'react';
import UserContext from './UserContext'
import allReducers from '../src/reducers/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  const [user,setUser] = useState('')
  const [name,setName] = useState('')
  const [test,setTest] = useState('')

  return (
    <Provider store={store}>
        <UserContext.Provider value={{user,setUser,name,setName,test,setTest}}>
            <BrowserRouter>
              <Link to='/' >HomePage</Link>
              <br/>
              <Link to='/about' >About</Link>
              <br/>
              <Link to='/contact' >Contact</Link>
              <br/>
              <br/>
              <br/>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/about' component={About}  />
                <Route exact path='/contact' component={Contact}  />
              </Switch>
              </BrowserRouter>
          </UserContext.Provider>
    </Provider>
  );
}

export default App;
