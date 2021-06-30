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
          <Route path='/web-portfolio/' exact component={Home} />
          <Route path='/web-portfolio/education' exact component={Education} />
          <Route path='/web-portfolio/experience' exact component={Experience} />
          <Route path='/web-portfolio/info' exact component={Info} />
          <Route path='/web-portfolio/projects' exact component={Projects} />
          <Route path='/web-portfolio/skills' exact component={Skills} />
        </Switch>

      </Router>
    </>
  );
}
export default App;