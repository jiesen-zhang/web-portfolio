import './App.css';
import Sidebar from './components/Sidebar';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Info from './pages/Info'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    
    <>
      <Router>
        
        <Sidebar /> 
        {/* <Header/> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/info' component={Info} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
        </Switch>

      </Router>
    </>
  );
}
export default App;