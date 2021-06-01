import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home';
import Update from './components/Update';
import Detail from './components/Detail';
import Search from './components/Search';
import List from './components/List';
import Create from './components/Create';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';


function App() {
  return (
  <div className="App">
  
      <Router>
  
     
        
        {/* <Route exact path="/">
          <Home/> */}
         
        {/* </Route> */}
        <Protected exact path="/" component={Home} />
        <Protected exact path="/list" component={List} />
        <Protected exact path="/update/:id" component={Update} />
        <Protected exact path="/search" component={Search} />
        <Protected exact path="/create" component={Create} />
        
        {/* <Route exact path="/list">
          <List/>
        </Route>
        <Route exact path="/update/:id" render={props=>(<Update {...props}/>)}>
      
        </Route>

        <Route exact path="/update/:id" render={props=>(<Update {...props}/>)}>
      
      </Route> */}
      <Route exact path="/logout" render={props=>(<Logout {...props}/>)}>
      
      </Route>

      <Route exact path="/login" render={props=>(<Login {...props}/>)}>
      
      </Route>




        {/* <Route exact path="/search">
          <Search/>
        </Route>  <Route  exact path="/detail">
          <Detail/>
        </Route>
      
        <Route path="/create">
          <Create/>
        </Route> */}
      
      </Router>
    </div>
  );
}

export default App;
