import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/web-portfolio" component={Home} exact />
        <Route path="/web-portfolio/resume" component={Resume} exact />
      </Switch>
    </Router>
  );
}
export default App;