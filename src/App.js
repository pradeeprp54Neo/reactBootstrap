import './App.css';
import Main from './Components/Main';
import NavigationBar from './Components/NavigationBar';
import RForm from './Components/RForm';
import {BrowserRouter as Router , Route, Link,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    < div className="bg-light">
    <NavigationBar />
    <Switch>
    <Route path='/home' exact component={Main} />
    <Route path='/form' exact component={RForm} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
