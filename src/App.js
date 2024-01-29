import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './components/landingPage';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/scanpage" component={LandingPage} />
    </Switch>
  </Router>

  );
}

export default App;
